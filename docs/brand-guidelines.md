# Brand Guidelines v1.0 — Quantum Electrical Solutions

> Last updated: 2026-10-13
> Status: Draft
> Source: site oficial https://quantumelectricalsolutions.com.au/ (WordPress + Elementor kit 56)
> Evidence: `elementor/css/post-56.css` (kit global), `elementor/css/post-54.css` (home), `elementor/css/post-2483.css` (header), CSS inline do tema (WPBF)

## Quick Reference

| Element | Value |
|---------|-------|
| Primary Color | #2C426A |
| Secondary Color | #00B3A7 |
| Accent Color | #00B3A7 |
| Primary Font | Montserrat |
| Accent/CTA Font | Roboto |
| Container | 1140px (Elementor) / 1200px (tema) |

---

## 1. Color Palette

### Elementor Kit Globals

Valores exatos das variáveis globais do kit (`--e-global-color-*`):

| Kit Variable | Hex | Papel |
|--------------|-----|-------|
| `--e-global-color-primary` | #2C426A | Títulos, ícones, texto de botão |
| `--e-global-color-secondary` | #00B3A7 | CTA (idêntico ao accent) |
| `--e-global-color-text` | #46536B | Corpo de texto, links |
| `--e-global-color-accent` | #00B3A7 | Botões, hover de navegação |
| `--e-global-color-8fd407d` | #F4F9F8 | Superfície clara (mint) |
| `e-page-transition` | #FFBC7D | Fundo da transição de página |

> Nota: o kit define `secondary` e `accent` com o mesmo teal `#00B3A7`. As escalas de tokens `secondary` e `accent` geradas por sync são, portanto, idênticas por design fiel ao site.

### Primary Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Primary Navy | #2C426A | rgb(44,66,106) | Títulos de seção, ícones, texto em botões brancos |
| Primary Navy Dark | #0D3E69 | rgb(13,62,105) | Links de nav, rodapé, fundos de seção escura, hover de botão do tema |
| Primary Navy Light | #E7EFFC | rgb(231,239,252) | Bordas/sombras suaves (accordion) |

### Secondary Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Secondary Teal | #00B3A7 | rgb(0,179,167) | Preenchimento de CTA, hover de link, nav ativa |
| Secondary Teal Dark | #005852 | rgb(0,88,82) | Glow/sombra dos botões teal (`0 0 11px`) |
| Secondary Teal Light | #F4F9F8 | rgb(244,249,248) | Fundos claros de seção |

### Accent Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Accent Teal | #00B3A7 | rgb(0,179,167) | Acento primário (CTAs, estados ativos) |
| Accent Peach | #FFBC7D | rgb(255,188,125) | Fundo da transição de página (uso único) |

### Neutral Palette

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Background | #FFFFFF | rgb(255,255,255) | Fundo de página, header, cartões, botões pílula |
| Surface | #F4F9F8 | rgb(244,249,248) | Superfície clara alternativa |
| Text Primary | #46536B | rgb(70,83,107) | Corpo de texto e links do tema |
| Border Soft | #E7EFFC | rgb(231,239,252) | Bordas de accordion/divisórias claras |
| Text on Dark | #FFFFFF | rgb(255,255,255) | Texto e ícones sobre seções navy |

### Semantic Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Link Default | #46536B | rgb(70,83,107) | Links no estado normal (tema) |
| Link Hover | #00B3A6 | rgb(0,179,166) | Hover de links no rodapé/tema (variação 1-off do teal do kit) |
| Page Transition | #FFBC7D | rgb(255,188,125) | Transição `e-page-transition` |

O site não define pares semânticos de sucesso/erro/aviso — não inventá-los.

### Non-Brand Colors (não usar)

Cores presentes apenas como defaults do Elementor/slider — não fazem parte da marca:

| Hex | Origem |
|-----|--------|
| #1ABC9C | Fundo de slides do Prime Slider (repeater) |
| #833CA3 | Fundo de slide (default Elementor) |
| #4054B2 | Fundo de slide (primary default do Elementor) |
| #738C88 | Texto do painel do accordion (não aprovado para novo uso) |

### Accessibility

Contraste WCAG calculado (texto sobre fundo):

| Par | Razão | Veredicto |
|-----|-------|-----------|
| #46536B sobre #FFFFFF | 7.75:1 | AAA |
| #2C426A sobre #FFFFFF | 10.03:1 | AAA |
| #0D3E69 sobre #FFFFFF | 10.99:1 | AAA |
| #FFFFFF sobre #0D3E69 | 10.99:1 | AAA |
| #FFFFFF sobre #00B3A7 | 2.62:1 | **Falha AA** (botões teal com texto branco) |
| #00B3A7 sobre #FFFFFF | 2.62:1 | **Falha AA** (não usar teal em texto pequeno) |
| #738C88 sobre #DDEDEA | 2.98:1 | **Falha AA** (texto do accordion original) |

Regra prática: teal `#00B3A7` é cor de **preenchimento/decoração**, nunca de texto pequeno. Texto deve usar navy `#2C426A`/`#46536B` ou branco sobre navy.

---

## 2. Typography

### Font Stack

```css
--font-heading: 'Montserrat', sans-serif;
--font-body: 'Montserrat', sans-serif;
--font-accent: 'Roboto', sans-serif;
```

### Kit Typography Variables

| Variable | Family | Weight | Uso |
|----------|--------|--------|-----|
| `--e-global-typography-primary-*` | Montserrat | 600 | Títulos |
| `--e-global-typography-secondary-*` | Montserrat | 400 | Descrições de slider |
| `--e-global-typography-text-*` | Montserrat | 400 | Corpo |
| `--e-global-typography-accent-*` | Roboto | 500 | Botões |

Regras do tema (CSS inline):
- `body, button, input, h1–h6` → Montserrat 400; `h1–h6` → Montserrat **700** (Elementor sobrescreve com 600 nos widgets)
- Menu (`wpbf-menu`) → Montserrat 400; itens do header Elementor → Montserrat **600**, 14px

### Type Scale

Tamanhos observados no CSS do site:

| Element | Size | Weight | Line Height | Notas |
|---------|------|--------|-------------|-------|
| Hero Title | 40px (mobile 25px) | 400 | 1.1em (mobile 1.4em) | `-webkit-text-stroke: #000` |
| Hero Sub-title | 43px | 400 | 49px | Prime Slider |
| H2 Section | 36px | 600 | — | Cor teal ou navy |
| H3 Section | 26px | 600 | — | 5 ocorrências |
| Small Heading | 18px | 600 | — | |
| Quote | 21px | 400 italic | 1.6em | |
| Caption (carousel) | 19px | 400 | — | |
| Nav Item | 14px | 600 | — | padding-x 10px |
| Body / Descrições | 15px | 400 | — | branco sobre navy |
| Button (CTA) | 10px label / variável | 500 | — | Roboto |
| Footer | 11px | 400 | — | tema |
| Feature Icons | 90px | — | — | icon-box |
| Header Icon | 26px | — | — | |

### Font Loading

O site **auto-hospeda** as fontes (não usa CDN do Google Fonts em runtime):

- `wp-content/uploads/elementor/google-fonts/css/montserrat.css` — Montserrat 100–900, normal + italic
- `wp-content/uploads/elementor/google-fonts/css/roboto.css` — Roboto 100–900, normal + italic
- `wp-content/fonts/montserrat/*.woff2` — @font-face do core WordPress (400, 700), `font-display: swap`

Para o novo site, preferir a mesma estratégia (self-host via `@font-face` ou `fonts.google.com` com `display=swap`).

---

## 3. Design Components

### Buttons

| Type | Background | Text | Font | Radius | Shadow/Glow |
|------|------------|------|------|--------|-------------|
| Primary (CTA) | #00B3A7 | #FFFFFF | Roboto 500 | 30px (pílula) | `0 0 11px #005852`; hover `0 0 50px 10px #00B3A7` |
| Secondary (pílula branca) | #FFFFFF | #2C426A | Montserrat | 30px (pílula) | hover `0 0 20px 10px #FFFFFF` |
| Tema (`.wpbf-button-primary`) | #46536B → hover #0D3E69 | #FFFFFF | Montserrat | — | — |

### Border Radius

| Element | Radius |
|---------|--------|
| Botões | 30px (pílula) |
| Painéis/colunas de seção | 15px |
| Imagens de carousel | 12px |

### Spacing & Containers

| Token | Valor | Uso |
|-------|-------|-----|
| Widgets spacing | 20px | Gap padrão Elementor (kit) |
| Container (Elementor) | 1140px | Seções boxed |
| Container (tema) | 1200px | `.wpbf-container` |
| Breakpoints | 1024px / 767px | Tablet / mobile (kit) |

### Header / Nav / Footer

| Part | Background | Text/Links | Hover |
|------|------------|-----------|-------|
| Header | #FFFFFF | nav item #46536B (kit text) | #00B3A7 (accent) |
| Mobile toggle | #0D3E69 | #FFFFFF | — |
| Footer (tema) | #FFFFFF (outer) | #0D3E69 (inner), 11px | link #00B3A6 |

---

## Changelog

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-10-13 | Extraído do site oficial (kit Elementor 56 + tema WPBF + CSS da home) |
