// popup.js
document.addEventListener('DOMContentLoaded', function() {
    const amazonCheckbox = document.getElementById('amazon');
  
    // Load saved settings
    chrome.storage.sync.get(['specialSites'], function(result) {
      const specialSites = result.specialSites || {
        'amazon': true
      };
      amazonCheckbox.checked = specialSites.amazon;
    });
  
    // Save settings when checkboxes are changed
    function saveSetting(siteKey, checkboxElement) {
      chrome.storage.sync.get(['specialSites'], function(result) {
        const specialSites = result.specialSites || {};
        specialSites[siteKey] = checkboxElement.checked;
        chrome.storage.sync.set({ specialSites: specialSites });
      });
    }
  
    amazonCheckbox.addEventListener('change', function() {
      saveSetting('amazon', amazonCheckbox);
    });
});
