document.getElementById("version").textContent = `Version ${browser.runtime.getManifest().version}`;

document.getElementById("executeOperation").addEventListener("click", async function () {
  const operation = document.getElementById("operationSelector").value;

  const tabs = await browser.tabs.query({ active: true, currentWindow: true });
  const url = new URL(tabs[0].url);

  if (url.pathname.includes("/rest/services/")) {
    url.pathname = url.pathname.replace("/rest/services/", "/rest/admin/services/") + `/${operation}`;
    await browser.tabs.create({ url: url.toString() });
  } else {
    alert("The current URL is not a valid ArcGIS REST services URL.");
  }
});
