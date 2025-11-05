// Ponto de entrada — orquestra fetch e render
import { fetchLinksJson } from './linksService.js';
import { render } from './renderer.js';

const container = document.getElementById("container");

async function init() {
    try {
        const grupos = await fetchLinksJson(); // espera um array como no seu index original
        render(container, grupos);
    } catch (e) {
        console.error("Erro ao carregar links.json", e);
        container.innerHTML = "<p style='color:#f55;'>Erro ao carregar links.</p>";
    }
}

init();