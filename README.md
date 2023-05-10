# ArcGIS REST API Admin Helper v1.2.0

A browser extension to quickly navigate to ArcGIS REST API administration operations for hosted services.

## Features

- Navigate to the following ArcGIS REST API operations directly from the extension:
  - Refresh
  - Add To Definition
  - Update Definition
  - Delete From Definition

## Important Notes

1. This extension has been successfully tested on ArcGIS Online (AGOL) 11.0.0 and ArcGIS Enterprise Portal 10.8.

2. Newer versions of AGOL and Portal may have a different interface when opening the REST URL. To ensure this extension works, be sure to open the item's REST URL in a new tab. The URL must look something like this to work: `https://services.myserver.com/OrgID/ArcGIS/rest/services/example/FeatureServer/0`.

## How to use

1. Install the extension in your browser.
2. Navigate to an ArcGIS REST services URL.
3. Click the extension's icon in the top bar.
4. Select the desired operation from the dropdown menu.
5. Click the "Execute Operation" button.
6. The operation's webpage will open in a new tab.

![how_to_use](https://user-images.githubusercontent.com/31683291/236974747-ce4f110b-99d5-4fdb-80cc-bdf4385bf373.gif)

## Manual Installation

### Chrome

1. Download the Chrome extension files from the [Chrome](./Chrome) directory in this repository.
2. Open the Chrome browser and navigate to `chrome://extensions`.
3. Enable "Developer mode" by toggling the switch in the top right corner of the page.
4. Click "Load unpacked" and select the folder containing the downloaded Chrome extension files.
5. The extension should now be installed and visible in your Chrome extensions list.

### Firefox

1. Download the Firefox extension files from the [Firefox](./Firefox) directory in this repository.
2. Open the Firefox browser and navigate to `about:debugging`.
3. Click "This Firefox" in the left sidebar.
4. Click "Load Temporary Add-on..." and select the `manifest.json` file from the downloaded Firefox extension files.
5. The extension should now be installed and visible in your Firefox extensions list.

## Limitations

- The extension currently supports ArcGIS Online and Enterprise Portal hosted services.
- The extension assumes the user has a valid token included in the URL for accessing the REST API operations.

## Attributions

- Icon: https://www.flaticon.com/free-icons/magnifying-glass
- OpenAI's ChatGPT

## Contributing

Please feel free to submit issues or contribute code to improve the extension.

## Contact Information

If you have any questions, issues, or suggestions, feel free to reach out through the following channels:

- Email: [JoshALogs@gmail.com](mailto:JoshALogs@gmail.com)
- GitHub: [arcgis-rest-admin-tool](https://github.com/JoshALogs/arcgis-rest-admin-tool)
