// content.js
(function() {
    // Exit early if the URL is a Google Spreadsheet
    if (window.location.hostname === 'docs.google.com' && window.location.pathname.startsWith('/spreadsheets')) {
        return;
    }

    // Add event listener for keydown events
    document.addEventListener('keydown', function(event) {
        // Check if the pressed key is "/" and no input/textarea is focused
        if (event.key === '/' && !document.activeElement.matches('input, textarea')) {
            // Check if the URL contains "wp-admin" or if a form element is selected
            if (window.location.href.includes('wp-admin') || document.activeElement.closest('form')) {
                return; // Do not intercept
            }

            event.preventDefault(); // Prevent default browser behavior
            
            chrome.storage.sync.get(['specialSites'], function(result) {
                const specialSites = result.specialSites || {
                    'amazon': true
                };

                // Check for special cases first
                if (window.location.hostname.includes('amazon.com') && specialSites.amazon) {
                    focusSearchBoxAmazon();
                    return;
                }

                // Default behavior: look for any search input
                focusDefaultSearchBox();
            });
        }
    });

    function focusDefaultSearchBox() {
        // Try different common search input selectors in order of preference
        const searchSelectors = [
            'input[type="search"]',
            'input[role="searchbox"]',
            'input[name="q"]',
            'input[name="search"]',
            'input[placeholder*="search" i]',
            'input[placeholder*="Search" i]'
        ];

        for (const selector of searchSelectors) {
            const searchBox = document.querySelector(selector);
            if (searchBox) {
                searchBox.focus();
                return;
            }
        }
    }

    function focusSearchBoxAmazon() {
        const searchBox = document.querySelector('input[role="searchbox"]');
        if (searchBox) {
            searchBox.focus();
        }
    }
})();
