let alertsShown = false;

const addYellowBorder = () => {
  document.body.style.border = "5px solid yellow";
};

const addWarningText = () => {
  const warningText = document.createElement("div");
  warningText.innerText = "Página não indexável";
  warningText.style.position = "fixed";
  warningText.style.top = "10px";
  warningText.style.left = "10px";
  warningText.style.backgroundColor = "rgba(255, 255, 0, 0.8)"; // Amarelo com opacidade
  warningText.style.color = "black";
  warningText.style.fontSize = "14px";
  warningText.style.padding = "5px 10px";
  warningText.style.borderRadius = "3px";
  warningText.style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0.3)";
  warningText.style.zIndex = "9999";
  document.body.appendChild(warningText);
};

const checkNoIndex = () => {
  if (alertsShown) return;

  const bodyText = document.body.innerText || document.body.textContent;
  const keywords = ["noIndex", "noindex"];
  const foundInBody = keywords.some((keyword) =>
    bodyText.toLowerCase().includes(keyword.toLowerCase())
  );

  const metaTags = document.querySelectorAll('meta[name="robots"]');
  const foundInMeta = Array.from(metaTags).some((tag) =>
    tag.content.toLowerCase().includes("noindex")
  );

  if (foundInBody || foundInMeta) {
    const currentDomain = window.location.hostname;

    if (currentDomain.includes("melhorplano.net") || currentDomain.includes("idinheiro.com.br")) {
      addYellowBorder();
    }

    addWarningText();

    alert("Atenção! Foi detectado 'noindex' nesta página.");
    alert("Certifique-se de remover 'noindex' se necessário.");
    alertsShown = true;
  }
};

const observer = new MutationObserver(() => {
  checkNoIndex();
});

checkNoIndex();
observer.observe(document.body, { childList: true, subtree: true });
