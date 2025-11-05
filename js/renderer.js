// Responsável por construir o DOM a partir dos dados
import { normalizeUrl, saveState, getState } from './linksService.js';

function createAccordionHeader(grupo) {
    const header = document.createElement("div");
    header.className = "accordion-header";
    header.style.color = grupo.cor || "var(--text)";
    header.innerHTML = `
        <span class="indicador">▶</span>
        <span>${grupo.icone ?? "📁"}</span>
        <span>${grupo.nome}</span>
    `;
    return header;
}

function createCard(link) {
    const a = document.createElement("a");
    a.href = normalizeUrl(link.url);
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.className = "card";
    const tooltip = link.descricao ? link.descricao : link.url;
    a.setAttribute("data-tip", tooltip);
    a.innerHTML = `
        <div class="icon">${link.icone ?? "🔗"}</div>
        <div class="label">${link.nome}</div>
    `;
    return a;
}

export function render(container, grupos) {
    container.innerHTML = "";
    grupos.forEach(grupo => {
        const abertoInicial = getState(grupo.nome, !!grupo.aberto);

        const accordion = document.createElement("div");
        accordion.className = "accordion" + (abertoInicial ? " open" : "");

        const header = createAccordionHeader(grupo);
        header.addEventListener("click", () => {
            accordion.classList.toggle("open");
            const estaAberto = accordion.classList.contains("open");
            saveState(grupo.nome, estaAberto);
        });

        const content = document.createElement("div");
        content.className = "accordion-content";
        const grid = document.createElement("div");
        grid.className = "grid";

        (grupo.links || []).forEach(link => {
            grid.appendChild(createCard(link));
        });

        content.appendChild(grid);
        accordion.appendChild(header);
        accordion.appendChild(content);
        container.appendChild(accordion);
    });
}