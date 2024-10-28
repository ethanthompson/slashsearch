# SlashSearch Chrome Extension

## Overview
SlashSearch is a Chrome extension designed to enhance your browsing experience by making it easier to navigate to search boxes on commonly used websites. When you press the `/` key on your keyboard (while no input or textarea is focused), the extension will automatically focus the search box of the current website, saving you time and hassle.

This extension also allows you to customize which websites have special behavior when using the `/` key, such as Amazon and other popular retail sites.

## Features
- **Focus Search Box:** Quickly focus the search box on any website by pressing the `/` key.
- **Special Website Support:** Pre-defined behaviors for popular websites like Amazon.
- **Customizable Settings:** Control which websites have custom search behaviors through an easy-to-use popup interface.

## How It Works
SlashSearch relies on a content script (`content.js`) to listen for the `/` key. When pressed, it attempts to focus the main search box of the website. If the website is Amazon, it uses a specific function (`focusSearchBoxAmazon()`) to locate and focus Amazon's search box. For other sites, it uses common selectors to find an input field that is likely to be a search box.

The extension stores preferences using Chrome's `chrome.storage.sync` feature. This allows you to save custom preferences for specific websites, which are managed through the popup interface (`popup.html`). You can enable or disable special search behaviors for websites like Amazon, Target, and Walmart.

The extension uses `background.js` to initialize default settings when it is installed, ensuring that Amazon is enabled by default.

## Installation Instructions
To install SlashSearch as an unpacked Chrome extension:

1. **Download the Files:**

2. **Open Chrome Extensions Page:**
   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable "Developer mode" using the toggle switch in the top right corner.

3. **Load the Extension:**
   - Click the "Load unpacked" button.
   - Select the folder where all the files are located.

4. **Verify Installation:**
   - Once loaded, you should see SlashSearch in the list of extensions.
   - Click on the puzzle piece icon in Chrome to pin the SlashSearch extension to your toolbar if desired.

5. **Customize Your Settings:**
   - Click on the SlashSearch extension icon to open the popup (`popup.html`).
   - Use the checkboxes to enable or disable support for specific sites, such as Amazon, Target, Walmart, and others.

## Usage
- Once installed, simply press the `/` key on any supported website to instantly focus the search box.
- Use the extension's popup to add or remove special behaviors for specific sites.

## Permissions
SlashSearch requests the following permissions:
- **activeTab:** To interact with the active website and modify search behavior.
- **storage:** To save and load your settings for which sites have custom search behaviors.

## Code Overview
- **Manifest (`manifest.json`):** Describes the extension, declares permissions, and specifies scripts used.
- **Content Script (`content.js`):** Handles the keydown event to focus search boxes.
- **Background Script (`background.js`):** Initializes the default settings when the extension is installed.
- **Popup (`popup.html` & `popup.js`):** Provides a UI for users to customize the special site behaviors.

Enjoy faster searching with SlashSearch!