function readSelection(target) {
  if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement) {
    if (target.type === "password" || target.selectionStart === null) {
      return "";
    }
    return target.value.slice(target.selectionStart, target.selectionEnd);
  }

  return window.getSelection()?.toString() ?? "";
}

window.addEventListener("keydown", (event) => {
  if (
    !event.isTrusted ||
    event.key !== "F4" ||
    event.ctrlKey ||
    event.altKey ||
    event.shiftKey ||
    event.metaKey ||
    event.repeat ||
    event.isComposing ||
    event.defaultPrevented
  ) {
    return;
  }

  const selection = readSelection(event.composedPath()[0]).trim();
  if (!selection) {
    return;
  }

  event.preventDefault();
  event.stopImmediatePropagation();
  chrome.runtime.sendMessage({ type: "search-selection", selection }).catch((error) => {
    console.warn("F4 to Search could not start the search.", error);
  });
}, { capture: true });
