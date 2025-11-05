# links# Meus Links — Página estática

Página estática que lista links dinamicamente a partir dos dados em `links.json`. A interface usa `index.html` e carrega os grupos e links via `fetch`. Ideal para um perfil pessoal ou linktree simples hospedado como site estático.

## Recursos
- Agrupa links por categorias (accordion).
- Abre links em nova aba com `noopener noreferrer`.
- Normaliza URLs adicionando `https://` quando necessário (exceto `mailto:`).
- Mantém o estado (aberto/fechado) dos accordions em `localStorage`.
- Layout responsivo e fácil de personalizar.

## Arquivos principais
- `index.html` — página estática que renderiza a interface.
- `links.json` — dados dos grupos e links (veja esquema abaixo).
- `assets/` — imagens (por exemplo `assets/avatar.jpg`) e ícones.

## Estrutura de `links.json`
Formato esperado (exemplo):

Campos principais:
- Grupo
  - `nome` (string) — título do grupo.
  - `icone` (string, opcional) — emoji ou texto exibido no header.
  - `cor` (string, opcional) — cor do texto do header (hex, rgb, etc.).
  - `aberto` (boolean, opcional) — estado inicial do accordion.
  - `links` (array) — lista de objetos de link.
- Link
  - `nome` (string) — rótulo do link exibido no card.
  - `url` (string) — URL ou `mailto:`. Se não começar com `http` ou `mailto:`, `https://` é prefixado.
  - `descricao` (string, opcional) — texto exibido no tooltip.
  - `icone` (string, opcional) — emoji ou caractere mostrado no card.