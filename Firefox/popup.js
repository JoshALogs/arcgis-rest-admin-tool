// Add a click event listener to the "Execute Operation" button
document.getElementById("executeOperation").addEventListener("click", function () {
  // Get the selected operation from the dropdown menu
  const operation = document.getElementById("operationSelector").value;

  // Query the active tab in the current window
  browser.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    // Get the current tab
    const currentTab = tabs[0];

    // Get the URL of the current tab
    const originalUrl = currentTab.url;

    // Check if the URL is a valid ArcGIS REST services URL
    if (originalUrl.includes("/rest/services/")) {
      // Replace "/rest/services/" with "/rest/admin/services/" in the URL
      let adminUrlBase = originalUrl.replace("/rest/services/", "/rest/admin/services/");

      // Find the index of the "?token=" substring in the URL
      const tokenIndex = originalUrl.indexOf("?token=");

      // Check if the token is present in the URL
      if (tokenIndex !== -1) {
        // Get the token from the URL
        const token = originalUrl.slice(tokenIndex);

        // Replace "?token=" with "/{operation}?token=" in the URL
        adminUrlBase = adminUrlBase.replace("?token=", `/${operation}?token=`);
      } else {
        // Append the operation to the URL if there is no token
        adminUrlBase = adminUrlBase + `/${operation}`;
      }

      // Open a new tab with the modified URL
      browser.tabs.create({ url: adminUrlBase });
    } else {
      // Display an alert if the URL is not a valid ArcGIS REST services URL
      alert("The current URL is not a valid ArcGIS REST services URL.");
    }
  });
});
