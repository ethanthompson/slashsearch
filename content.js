// content.js
(function() {
    // Add event listener for keydown events
    document.addEventListener('keydown', function(event) {
      // Check if the pressed key is "/" and no input/textarea is focused
      if (event.key === '/' && !document.activeElement.matches('input, textarea')) {
        event.preventDefault(); // Prevent default browser behavior
        
        // Check which website the user is on and if it is enabled in settings
        chrome.storage.sync.get(['enabledSites'], function(result) {
          const enabledSites = result.enabledSites || {
            'amazon': true,
            'walmart': true,
            'printables': true
          };
  
          if (window.location.hostname.includes('amazon.com') && enabledSites.amazon) {
            focusSearchBoxAmazon();
          } else if (window.location.hostname.includes('walmart.com') && enabledSites.walmart) {
            focusSearchBoxWalmart();
          } else if (window.location.hostname.includes('printables.com') && enabledSites.printables) {
            focusSearchBoxPrintables();
          }
        });
      }
    });
  
    function focusSearchBoxAmazon() {
      const searchBox = document.querySelector('input[role="searchbox"]');
      if (searchBox) {
        searchBox.focus();
      }
    }
  
    function focusSearchBoxWalmart() {
      const searchBox = document.querySelector('input[type="search"]');
      if (searchBox) {
        searchBox.focus();
      }
    }
  
    function focusSearchBoxPrintables() {
      const searchBox = document.querySelector('input[type="search"]');
      if (searchBox) {
        searchBox.focus();
      }
    }
  })();