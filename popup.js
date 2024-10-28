// popup.js
document.addEventListener('DOMContentLoaded', function() {
    const amazonCheckbox = document.getElementById('amazon');
    const walmartCheckbox = document.getElementById('walmart');
    const printablesCheckbox = document.getElementById('printables');
  
    // Load saved settings
    chrome.storage.sync.get(['enabledSites'], function(result) {
      const enabledSites = result.enabledSites || {
        'amazon': true,
        'walmart': true,
        'printables': true
      };
      amazonCheckbox.checked = enabledSites.amazon;
      walmartCheckbox.checked = enabledSites.walmart;
    });
  
    // Save settings when checkboxes are changed
    function saveSetting(siteKey, checkboxElement) {
      chrome.storage.sync.get(['enabledSites'], function(result) {
        const enabledSites = result.enabledSites || {};
        enabledSites[siteKey] = checkboxElement.checked;
        chrome.storage.sync.set({ enabledSites: enabledSites });
      });
    }
  
    amazonCheckbox.addEventListener('change', function() {
      saveSetting('amazon', amazonCheckbox);
    });
  
    walmartCheckbox.addEventListener('change', function() {
      saveSetting('walmart', walmartCheckbox);
    });
  
    printablesCheckbox.addEventListener('change', function() {
      saveSetting('printables', printablesCheckbox);
    });
  });  
