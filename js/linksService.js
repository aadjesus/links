// Responsável por fetch / normalização / persistência de estado
export async function fetchLinksJson(path = "links.json") {
    const res = await fetch(path);
    if (!res.ok) throw new Error(`Falha ao carregar ${path}: ${res.status}`);
    return res.json();
}

export function normalizeUrl(url) {
    if (!url) return "#";
    if (url.startsWith("http") || url.startsWith("mailto:")) return url;
    return `https://${url}`;
}

const STORAGE_KEY = "estadosAccordion";
export function saveState(nome, aberto) {
    try {
        const estados = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
        estados[nome] = aberto;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(estados));
    } catch (e) {
        console.warn("Não foi possível salvar estado:", e);
    }
}

export function getState(nome, padrao) {
    try {
        const estados = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
        return estados[nome] !== undefined ? estados[nome] : padrao;
    } catch (e) {
        return padrao;
    }
}