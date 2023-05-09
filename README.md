# ArcGIS REST API Admin Helper

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

## Limitations

- The extension currently supports ArcGIS Online and Enterprise Portal hosted services.
- The extension assumes the user has a valid token included in the URL for accessing the REST API operations.

## Attributions

- Icon: https://www.flaticon.com/free-icons/magnifying-glass

## Contributing

Please feel free to submit issues or contribute code to improve the extension.

# Contact Information

If you have any questions, issues, or suggestions, feel free to reach out through the following channels:

- Email: [JoshALogs@gmail.com](mailto:JoshALogs@gmail.com)
- GitHub: [arcgis-rest-admin-tool](https://github.com/JoshALogs/arcgis-rest-admin-tool)