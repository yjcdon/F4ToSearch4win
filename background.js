chrome.runtime.onMessage.addListener((message, sender) => {
  if (message?.type !== "search-selection" || typeof message.selection !== "string" || !sender.tab) {
    return;
  }

  const selection = message.selection.trim();
  if (!selection) {
    return;
  }

  const search = new URL("https://www.google.com/search");
  search.searchParams.set("q", selection);
  chrome.tabs.create({ url: search.href, windowId: sender.tab.windowId }).catch((error) => {
    console.warn("F4 to Search could not open the search tab.", error);
  });
});
