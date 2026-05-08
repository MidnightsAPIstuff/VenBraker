document.getElementById('resetBtn').addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const url = new URL(tab.url);
  const origin = url.origin;

  chrome.browsingData.remove({
    "origins": [origin]
  }, {
    "cacheStorage": true,
    "cookies": true,
    "fileSystems": true,
    "indexedDB": true,
    "localStorage": true,
    "serviceWorkers": true,
    "webSQL": true
  }, () => {
    chrome.tabs.reload(tab.id);
  });
});
