---
version: alpha
name: Quantum Electrical
description: >-
  Identidade corporativa atual da Quantum Electrical & Technological Services:
  hero cinematografico preservado, dobras editoriais claras em superficie clara,
  Urbanist como sans principal, IBM Plex Mono para labels tecnicos,
  Cormorant Garamond como acento editorial e uma familia de paineis e cards
  de precisao com acento teal.

colors:
  q-navy: "#0D3E69"
  q-navy-900: "#08294A"
  q-navy-100: "#E3EAF2"
  q-teal: "#00B3A6"
  q-teal-600: "#00968B"
  q-teal-100: "#AFDBDA"
  q-white: "#FFFFFF"
  q-shell: "#F7F8F8"
  q-slate: "#46536B"
  q-ink: "#0A0808"
  q-dusk: "#16283C"
  q-2200k: "#FF9A3C"
  q-2700k: "#FFB45E"
  q-3000k: "#FFD9A0"

typography:
  primary:
    fontFamily: Urbanist
    weights: "400, 500, 600, 700, 800"
  accent:
    fontFamily: Cormorant Garamond
    weights: "300, 400, 500, 600"
  technical:
    fontFamily: IBM Plex Mono
    weights: "400, 500"
  hero-exception:
    fontFamily: Inter Variable
    usage: hero preserved only
  utilities:
    display:
      fontFamily: Urbanist
      fontWeight: 800
      letterSpacing: -0.03em
      lineHeight: 0.94
    h2:
      fontFamily: Urbanist
      fontWeight: 700
      letterSpacing: -0.025em
      lineHeight: 1.02
    eyebrow:
      fontFamily: IBM Plex Mono
      fontSize: 11px
      fontWeight: 500
      letterSpacing: 0.16em
      textTransform: uppercase

rounded:
  field: 3px
  micro: 4px
  tooltip: 5px
  panel: 6px
  chip: 8px
  media: 10px
  card: 14px
  card-lg: 16px
  project: 18px
  pill: 9999px

layout:
  maxWidth: 1440px
  gutterMobile: 20px
  gutterTablet: 32px
  gutterDesktop: 56px

motion:
  easeQuint: "cubic-bezier(0.22, 1, 0.36, 1)"
  easeOutExpo: "cubic-bezier(0.16, 1, 0.3, 1)"

components:
  cta-solid:
    backgroundColor: "{colors.q-navy}"
    hoverBackgroundColor: "{colors.q-teal}"
    textColor: "{colors.q-white}"
    rounded: "{rounded.field}"
  cta-link:
    borderBottom: "1px solid rgba(13,62,105,0.25)"
    textColor: "{colors.q-navy}"
  form-field:
    backgroundColor: "{colors.q-white}"
    textColor: "{colors.q-ink}"
    rounded: "{rounded.field}"
  panel-glass:
    backgroundColor: "rgba(8,41,74,0.62)"
    rounded: "{rounded.micro}"
  editorial-card:
    backgroundColor: "{colors.q-white}"
    rounded: "{rounded.card}"
  project-card:
    backgroundColor: "#0A1422"
    rounded: "{rounded.project}"
---

## Overview

O sistema visual atual da Quantum nao e mais o sistema antigo baseado em Montserrat
com botao pill em toda a interface. A implementacao real usa uma linguagem mais
editorial e arquitetonica da segunda dobra em diante:

- **hero preservado** com tipografia e composicao proprias;
- **superficies claras** em `q-shell` e `q-white` nas secoes institucionais;
- **Urbanist** como tipografia principal do redesign;
- **IBM Plex Mono** para labels, serials e leitura tecnica;
- **Cormorant Garamond** como acento editorial em titulos de projetos e manifesto;
- **teal** como acento de interacao e estado ativo;
- **cards precisos** com cantos pequenos a medios, em vez de uma interface pill-first.

O tom continua tecnico, premium, institucional e confiavel. A pagina trabalha
com alternancia entre dobras claras e tres zonas escuras controladas: o hero
preservado, a dobra interativa de iluminacao e a vitrine de projetos / footer.

## Runtime Source Of Truth

O source of truth do sistema visual em runtime e `src/styles/global.css`.

Ele define:

- tokens de cor realmente usados pela UI (`--color-q-*`);
- utilitarios tipograficos (`u-display`, `u-h2`, `u-eyebrow`, `u-tabular`);
- motion tokens (`--ease-quint`, `--ease-out-expo`);
- animacoes utilitarias (`breathe`, `halo`, `marquee`, `kenburns`);
- grids arquitetonicos (`u-grid-paper`, `u-grid-paper-dark`).

Os arquivos `assets/design-tokens.css` e `assets/design-tokens.json` existem no
repositorio, mas **nao sao a fonte ativa de runtime da homepage atual**.

## Colors

### Core palette in use

- **q-navy `#0D3E69`**: azul institucional principal para titulos, CTAs escuros,
  linhas de interface e estrutura editorial.
- **q-navy-900 `#08294A`**: azul profundo de palco para overlays, HUDs, footer,
  cards escuros e profundidade.
- **q-navy-100 `#E3EAF2`**: apoio suave em chips, discos e fundos tecnicos claros.
- **q-teal `#00B3A6`**: acento principal de interacao. O runtime usa `#00B3A6`.
  Documentacao antiga pode citar `#00B3A7`, mas a interface atual renderiza
  `#00B3A6` como token principal.
- **q-teal-600 `#00968B`**: hover / tom secundario do teal em links e icones.
- **q-teal-100 `#AFDBDA`**: texto claro, glows suaves e paineis sobre fundos escuros.
- **q-white `#FFFFFF`**: branco puro para cards, inputs e secoes claras.
- **q-shell `#F7F8F8`**: off-white principal da pagina institucional.
- **q-slate `#46536B`**: corpo de texto e paragrafo editorial.
- **q-ink `#0A0808`**: texto forte em campos e elementos de precisao.

### Lighting-only temperature scale

Estes tokens so aparecem na dobra `The Lighting Effect`:

- **q-dusk `#16283C`**: base da casa apagada / blue hour.
- **q-2200k `#FF9A3C`**: glow mais quente e profundo.
- **q-2700k `#FFB45E`**: cor principal de iluminacao ativa e hotspots.
- **q-3000k `#FFD9A0`**: highlight quente suave para estados fully lit.

### Hairlines and borders

A homepage atual nao depende de um border token solido unico como `#E7EFFC`.
Na pratica, os divisores sao feitos com alfa do azul institucional:

- `rgba(13, 62, 105, 0.12)` para hairlines principais;
- `rgba(13, 62, 105, 0.07)` para grids e linhas suaves.

## Typography

### Active font system

- **Urbanist**: sans principal da segunda dobra em diante.
- **IBM Plex Mono**: labels tecnicos, contadores, microcopy serializado e eyebrows.
- **Cormorant Garamond**: acento editorial em projetos, manifesto e alguns momentos do hero.
- **Inter Variable**: excecao local do hero preservado.

### Utility-level type tokens actually used

- **`u-display`**: `Urbanist`, peso `800`, `letter-spacing: -0.03em`,
  `line-height: 0.94`.
- **`u-h2`**: `Urbanist`, peso `700`, `letter-spacing: -0.025em`,
  `line-height: 1.02`.
- **`u-eyebrow`**: `IBM Plex Mono`, `11px`, peso `500`,
  `letter-spacing: 0.16em`, uppercase.
- **`u-tabular`**: ativa `tabular-nums lining-nums` para metricas, contadores,
  references e HUDs.

### Real sizing pattern

O sistema atual usa **tipografia fluida por componente**, nao uma escala fixa e unica.
Os tamanhos mais recorrentes sao:

- headlines principais entre `clamp(2.1rem, 4.6vw, 5.2rem)`;
- titulos secundarios entre `1.7rem` e `2.6rem`;
- corpo editorial entre `14px` e `17px`;
- labels tecnicos entre `8.5px` e `11.5px`;
- serif editorial de projetos entre `1.8rem` e `2.6rem` nos cards de portfolio.

### Typography guidance

- Urbanist continua sendo a **tipografia primaria** da Vitrine da segunda dobra em diante.
- IBM Plex Mono entra como linguagem tecnica, nunca como corpo corrido.
- Cormorant entra como contraste editorial pontual, nunca como fonte dominante da interface.
- O hero permanece com sua direcao tipografica propria por restricao de escopo.

## Layout

- **Largura maxima de conteudo**: `1440px`.
- **Gutters horizontais**:
  - mobile: `20px` (`px-5`)
  - tablet: `32px` (`sm:px-8`)
  - desktop: `56px` (`lg:px-14`)
- **Grid principal**: 12 colunas nas dobras editoriais.
- **Ritmo vertical**: a maioria das secoes usa blocos entre `py-24` e `py-36`
  (96px a 144px), com secoes mais compactas entre `py-16` e `py-20`.

### Section surface model

- `Pillars`, `Sectors`, `Founder Statement`: base em `q-shell`.
- `Engineering`, `Final CTA`, `Lighting Effect` inativo: base em `q-white`.
- `Lighting Effect` ativo: fundo `q-navy-900` com theater mode externo.
- `Projects`: zona escura dedicada com fundo `#060D17` e cards `#0A1422`.
- `Footer`: bookend institucional em `q-navy-900`.

### Backdrop utilities

- **`u-grid-paper`**: grid claro de 72px x 72px.
- **`u-grid-paper-dark`**: grid escuro de 88px x 88px.

## Motion

### Easing tokens in use

- **Primary easing**: `cubic-bezier(0.22, 1, 0.36, 1)`.
- **Secondary easing**: `cubic-bezier(0.16, 1, 0.3, 1)`.

### Motion patterns in use

- reveal vertical com fade (`Reveal`);
- line-mask reveal para headlines (`LineReveal`);
- `kenburns` em midias heroicas e fotografias de destaque;
- `breathe` para glows ambientais;
- `halo` para hotspots de iluminacao;
- `marquee` para capability list em `Sectors`.

### Reduced motion

Quando `prefers-reduced-motion` esta ativo:

- animacoes e transicoes sao praticamente zeradas;
- reveals viram estado visivel direto;
- line reveals perdem deslocamento;
- a pagina preserva conteudo e operabilidade sem depender do movimento.

## Elevation & Depth

O sistema atual mistura duas familias de profundidade:

### Light-surface depth

Usada nas dobras claras:

- sombras navy suaves como `0 24px 50px -20px rgba(8,41,74,0.22)`;
- cards editoriais entre `0 24px 55px -24px rgba(8,41,74,0.12-0.14)`;
- painel de enquiry com sombra mais funda:
  `0 44px 110px -60px rgba(8,41,74,0.75)`.

### Dark-stage depth

Usada nas dobras escuras e HUDs:

- overlays escuros com `backdrop-blur`;
- rings brancos muito suaves (`ring-white/12`, `ring-white/18`);
- spotlight teal em estados ativos, como projeto em destaque e cursor / CTA flutuante.

### Glow policy

- teal glow e reservado a estados ativos, spotlight e hotspots;
- o projeto nao usa glassmorphism pesado em tudo; blur aparece apenas em HUDs,
  badges, overlays tecnicos e cards escuros pontuais.

## Shapes

O sistema atual e de **precisao** e nao de pill dominante.

### Radii actually used

- **3px**: inputs, textareas e project-type chips do formulario.
- **4px**: HUDs, keypad buttons e CTAs pequenos escuros.
- **5px**: tooltip de hotspot na dobra de iluminacao.
- **6px**: stage principal de iluminacao, painel de enquiry e media frames tecnicos.
- **8px**: captions internos, contact rails e chips editoriais.
- **10px / 12px**: media cards claros e molduras de imagem.
- **14px / 16px**: cards claros maiores, manifesto e containers editoriais principais.
- **18px**: cards do portfolio / bento grid.
- **9999px**: badges, cursor pill, status dots e toggles circulares.

### Important correction

O redesign atual **nao** usa botao pill como linguagem principal da interface.
Pill continua existindo em badges, indicadores e alguns elementos do hero, mas as
acoes institucionais da segunda dobra em diante tendem a ser:

- links sublinhados por border-bottom;
- CTAs retangulares / quase retos (`3px` a `4px`);
- chips pequenos e precisos.

## Components

### Section wrappers

- grandes secoes usam `max-w-[1440px]` com grids de 12 colunas;
- quase sempre combinam hairline, grid de fundo e glow radial suave;
- a alternancia principal e `q-shell` / `q-white`, com excecao controlada das zonas escuras.

### Pillars

- showcase de midia clara com raio `10px-12px`;
- overlay navy para contraste;
- HUD superior em glass panel escuro e caption inferior em glass card `8px`.

### Lighting Effect

- stage principal `6px` sobre `q-dusk`;
- HUDs superiores `4px` com backdrop blur;
- tooltip tecnica `5px`;
- keypad lateral em `q-navy-900` com botoes `4px`;
- sistema de temperatura de cor exclusivo desta dobra.

### Engineering

- metricas em superficie clara com divisores finos;
- contadores monoespacados com `u-tabular`;
- tabs e process rail apoiados por hairlines em alfa navy.

### Sectors

- seletor textual com marcador teal de 2px;
- stage de imagem `6px` com caption e badge tecnico;
- lista de servicos com hairlines e rule teal curta.

### Projects

- dobra imersiva escura com cards `18px`;
- card em destaque recebe ring teal e sombra spotlight;
- badges usam mono + glass dark;
- fotos alternam por crossfade dentro do proprio card;
- CTA final segue a mesma familia escura com grid tecnico ao fundo.

### Founder Statement

- profile card claro `14px`;
- imagem com frame `10px`;
- rails de contato `8px`;
- manifesto principal `16px` com watermark serif de grande escala.

### Final CTA / Contact

- painel principal `6px` sobre `q-shell`;
- inputs e filters `3px`;
- submit principal em navy com hover teal;
- mensagens de erro usam vermelho dedicado inline, nao um token semantico global do sistema.

### Footer

- fundo `q-navy-900`;
- hairline teal superior;
- colunas de navegacao com links discretos;
- palavra fantasma "Quantum" em outline como assinatura de fechamento.

## Do's and Don'ts

- **Faca:** tratar `src/styles/global.css` como fonte real do sistema visual em runtime.
- **Faca:** manter Urbanist como tipografia primaria da segunda dobra em diante.
- **Faca:** usar IBM Plex Mono para labels tecnicos, contadores e pequenos indicadores.
- **Faca:** usar Cormorant Garamond apenas como contraste editorial pontual.
- **Faca:** alternar `q-shell` e `q-white` nas dobras claras.
- **Faca:** reservar superficies escuras para hero, Lighting Effect ativo, Projects e Footer.
- **Faca:** usar bordas finas e grids arquitetonicos em vez de decoracao excessiva.

- **Nao faca:** voltar para o sistema antigo descrito com Montserrat / Roboto como base da home atual.
- **Nao faca:** assumir uma escala tipografica fixa antiga como `43 / 40 / 36 / 26`.
- **Nao faca:** transformar toda CTA em pill; isso nao representa o redesign atual.
- **Nao faca:** usar glassmorphism pesado em superficies claras comuns.
- **Nao faca:** usar preto puro como linguagem principal de sombra em secoes claras; a profundidade principal continua navy-tinted.
- **Nao faca:** tratar `assets/design-tokens.*` como fonte autoritativa da homepage enquanto eles nao estiverem conectados ao runtime.
