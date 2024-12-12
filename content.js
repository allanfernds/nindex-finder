const checkNoIndex = () => {
  const bodyText = document.body.innerText || document.body.textContent;

  const keywords = ["noIndex", "noindex"];

  const found = keywords.some((keyword) => bodyText.toLowerCase().includes(keyword.toLowerCase()));

  if (found) {
    alert("A palavra 'noIndex' ou 'noindex' foi detectada nesta página!");
  }
};

const observer = new MutationObserver(() => {
  checkNoIndex();
});

observer.observe(document.body, { childList: true, subtree: true });

checkNoIndex();
