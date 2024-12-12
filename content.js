let alertsShown = false;

const checkNoIndex = () => {
  if (alertsShown) return; 

  const bodyText = document.body.innerText || document.body.textContent;

  const keywords = ["noIndex", "noindex"];

  const found = keywords.some((keyword) => bodyText.toLowerCase().includes(keyword.toLowerCase()));

  if (found) {
    alert("A palavra 'noIndex' foi detectada nesta página!");

    alert("Não se esqueça de remover o 'noindex' posteriormente!");

    alertsShown = true;
  }
};

const observer = new MutationObserver(() => {
  checkNoIndex();
});

observer.observe(document.body, { childList: true, subtree: true });
