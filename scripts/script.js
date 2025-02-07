// =========================================================================
//  SCROLL TOP BUTTON
// =========================================================================
window.addEventListener('scroll', function () {
    const scrollTopButton = document.getElementById('scrollTopButton');
    if (window.scrollY > 200) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});

document.getElementById('scrollTopButton').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// =========================================================================
//  CONTEXT MENU
// =========================================================================
document.addEventListener("contextmenu", function (event) {
    event.preventDefault();

    console.info(
        "Context menu (botão direito do mouse) desabilitado para proteger o conteúdo."
    );

    const mensagem = document.createElement("div");
    mensagem.textContent =
        "A funcionalidade do botão direito do mouse foi desabilitada nesta página.";

    mensagem.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.89);
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    z-index: 9999;
    font-size: 16px;
    `;

    document.body.appendChild(mensagem);

    setTimeout(() => {
        document.body.removeChild(mensagem);
    }, 3000);
});