---
version: alpha
name: Quantum Electrical
description: >-
  Identidade corporativa da Quantum Electrical & Technological Services (Sydney,
  Austrália): azul institucional profundo, um acento teal de alta visibilidade e
  uma única fonte sans geométrica (Montserrat) aplicada em toda a interface.

colors:
  primary: "#0D3E69"
  secondary: "#2C426A"
  accent: "#00B3A7"
  accent-dark: "#005852"
  text: "#46536B"
  muted: "#738C88"
  border: "#E7EFFC"
  surface: "#FFFFFF"
  on-accent: "#FFFFFF"

typography:
  display:
    fontFamily: Montserrat
    fontSize: 43px
    fontWeight: 600
    lineHeight: 49px
  h1:
    fontFamily: Montserrat
    fontSize: 40px
    fontWeight: 600
    lineHeight: 1.1em
  h2:
    fontFamily: Montserrat
    fontSize: 36px
    fontWeight: 600
    lineHeight: 1.3em
  h3:
    fontFamily: Montserrat
    fontSize: 26px
    fontWeight: 600
    lineHeight: 1.4em
  quote:
    fontFamily: Montserrat
    fontSize: 21px
    fontWeight: 400
    lineHeight: 1.6em
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6em
  body:
    fontFamily: Montserrat
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.7
  button:
    fontFamily: Montserrat
    fontSize: 15px
    fontWeight: 500

rounded:
  sm: 12px
  md: 15px
  pill: 30px

spacing:
  sm: 8px
  md: 20px
  lg: 40px

components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 12px
  button-primary-hover:
    backgroundColor: "{colors.accent-dark}"
    textColor: "{colors.on-accent}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 12px
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.secondary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 12px
  button-secondary-hover:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-accent}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 12px
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
    padding: 20px
  divider:
    backgroundColor: "{colors.border}"
    height: 1px
  text-muted:
    textColor: "{colors.muted}"
    typography: "{typography.body}"
---

## Overview

A Quantum Electrical é uma empresa de engenharia elétrica com atuação corporativa
(B2B) em Sydney. A linguagem visual é **sóbria e institucional**: fundo branco,
tipografia Montserrat em pesos 400–600 e um único acento de cor quente-fria (teal)
usado como "driver" de interação.

O tom é **técnico e confiável**, nunca lúdico. Títulos em azul profundo, corpo em
cinza-ardósia, e o teal reservado a botões, ícones e destaques. Os cantos são
arredondados em estilo "pill" (30px) nos botões e discretos (12–15px) nos cards.

## Colors

- **Primary (#0D3E69):** azul institucional profundo — fundos de seção, títulos e
  marca. É a cor dominante da identidade.
- **Secondary (#2C426A):** azul-marinho — links, títulos de toggles/accordions e
  texto sobre botões claros.
- **Accent (#00B3A7):** teal — **único** acionador de interação (botões primários,
  ícones, ênfases). Nunca usado como cor de fundo de grandes áreas de texto.
- **Accent Dark (#005852):** teal escuro — profundidade/glow em `box-shadow` de
  botões (`0 0 11px #005852`) e estado de hover.
- **Text (#46536B):** cinza-ardósia — corpo de texto padrão sobre fundo claro.
- **Muted (#738C88):** cinza esverdeado — texto secundário, legendas, conteúdo
  recolhido.
- **Border (#E7EFFC):** azul quase branco — hairlines, bordas de card e sombras
  suaves.
- **Surface (#FFFFFF):** branco — fundo base da página.
- **On Accent (#FFFFFF):** branco — texto sobre o acento teal.

## Typography

**Montserrat** é a fonte primária de facto (carregada via Google Fonts pelo
Elementor), nos pesos **400, 500, 600 e 700**. **Roboto** aparece apenas em alguns
botões (peso 500) — trate como secundária e opcional.

- `display` (43px) — títulos rotativos do hero/slider.
- `h1` (40px, lh 1.1) — manchete principal.
- `h2` (36px, wt 600) — títulos de seção.
- `h3` (26px, wt 600) — subtítulos e títulos de card.
- `body-lg` (18px) — parágrafos de destaque.
- `body` (15px, lh 1.7) — corpo padrão.
- `quote` (21px, itálico, lh 1.6) — depoimentos.
- `button` (15px, wt 500) — rótulos de ação.

Títulos em caixa alta só em rótulos pequenos; o restante usa capitalização normal
(`text-transform: none`).

## Layout

- Largura de conteúdo alinhada ao grid do Elementor (container ~1140px).
- Espaçamento base em `spacing`: 8px (sm), 20px (md), 40px (lg).
- Seções do hero (slider) usam margens negativas para sobrepor imagem e texto.
- Cards e colunas usam `margin: 20px` de gutter.

## Elevation & Depth

- **Glow teal:** botões primários usam `box-shadow: 0 0 11px 0 #005852`; no hover
  expande para `0 0 50px 10px` do próprio teal.
- **Sombra de card:** `0 2px 10px 0 #E7EFFC` (sombra azulada suave, sem preto).
- Sem uso de sombras escuras/pesadas — a profundidade é feita com o tom de azul claro.

## Shapes

- **Botões:** pills completos, `border-radius: 30px` (cantos totalmente arredondados).
- **Cards / containers:** `border-radius: 12px` a `15px`.
- **Blocos de ícone:** sem arredondamento (`0px`).
- Os raios vêm sempre dos tokens `rounded.sm` (12), `rounded.md` (15) e
  `rounded.pill` (30).

## Components

- `button-primary` — fundo teal (`{colors.accent}`), texto branco, pill. É a única
  ação de alta ênfase por seção.
- `button-primary-hover` — fundo teal escuro (`{colors.accent-dark}`) com glow.
- `button-secondary` — fundo branco (`{colors.surface}`), texto azul-marinho
  (`{colors.secondary}`), pill, usado sobre fundos escuros/azuis.
- `button-secondary-hover` — inverte para fundo `{colors.secondary}` e texto branco.
- `card` — superfície branca, borda `{colors.border}`, cantos `{rounded.md}`.

## Do's and Don'ts

- **Faça:** use o teal (`#00B3A7`) apenas como acento de interação.
- **Faça:** mantenha títulos em Montserrat 600 e corpo em Montserrat 400.
- **Não faça:** introduzir uma segunda fonte display (roboto fica restrito a botões).
- **Não faça:** usar sombras pretas — a profundidade é feita com azul claro
  (`#E7EFFC`).
- **Não faça:** usar o azul profundo (`#0D3E69`) como cor de texto de parágrafo;
  título e marca apenas.

<!-- Tokens extraídos do CSS real do site (Elementor post-54: cores #0D3E69,
     #2C426A, #00B3A7, #005852, #46536B, #E7EFFC, #738C88; tipografia Montserrat
     400/500/600/700 e Roboto 500). -->
