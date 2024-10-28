// background.js (optional for additional control, e.g., context menus)
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({
      enabledSites: {
        'amazon': true,
        'walmart': true,
        'printables': true
      }
    });
    console.log('Extension installed and ready to use!');
  });
