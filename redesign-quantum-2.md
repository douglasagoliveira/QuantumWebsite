# TAREFA: Redesign Parcial (Da 2ª Dobra para Baixo) — Quantum Electrical Solutions

Atue como um Engenheiro de Frontend Sênior e Diretor de Arte especialista em interfaces arquitetônicas de alto padrão. Vamos continuar o redesign do site https://quantumelectricalsolutions.com.au/.

## 1. REGRA DE OURO (ESCOPO E PROTEÇÃO)
- **NÃO ALTERE A HERO SECTION (1ª Dobra) NEM O HEADER/NAVBAR:** Mantenha 100% intactos o código, o layout, os estilos e as animações da primeira dobra que já estão prontos no projeto.
- **ESCOPO DE TRABALHO:** Suas alterações devem começar estritamente **a partir da 2ª dobra até o Footer**.

## 2. DESIGN SYSTEM, CORES E TIPOGRAFIA
- **Fonte Primária:** Configure e aplique a família tipográfica **`Urbanist`** em todas as seções a partir da 2ª dobra.
  - Explore variações de peso (Regular 400 para corpo, Medium 500 para subtítulos/labels, SemiBold 600 e Bold 700 para títulos) com `letter-spacing` levemente negativo (`-0.02em` a `-0.03em`) nos títulos grandes e `text-wrap: balance`.
- **Paleta de Cores (`DESIGN.md`):** Leia obrigatoriamente o arquivo `DESIGN.md` do projeto antes de iniciar e respeite rigorosamente as cores institucionais da Quantum definidas nele.
- **Superfície Predominante:** Mantenha o **fundo branco/off-white limpo e arquitetônico** da Quantum em todas as seções institucionais. Evite blocos escuros aleatórios ou gradientes genéricos de IA — a única exceção de escurecimento será o estado ativo do efeito interativo de "apagar as luzes" na 3ª dobra.

## 3. DIREÇÃO VISUAL E REFERÊNCIA (https://www.kichler.com/)
Use o site da **Kichler** como referência direta de estética editorial, respiro visual (whitespace generoso), fotografia arquitetônica de iluminação e interatividade:
- Layout assimétrico e editorial (evite o clichê de 3 cards iguais lado a lado com borda e sombra padrão).
- Uso de linhas divisórias sutis (`1px solid` com baixa opacidade), cantos refinados, microinterações fluidas (`cubic-bezier(0.22, 1, 0.36, 1)`) e hierarquia visual limpa.

## 4. NOVA 3ª DOBRA (LOGO APÓS A 2ª DOBRA): "THE LIGHTING EFFECT" + EFEITO APAGAR LUZES
Crie e insira uma **nova 3ª dobra** dedicada a demonstrar, na prática, a diferença brutal entre uma casa comum e uma residência com projeto luminotécnico e automação de alto padrão, seguindo o conceito *"See Effects in Action / Light Layering"* da Kichler:

- **Estética e Fotografia (Estilo Sydney, Austrália):**
  - A cena principal deve apresentar uma residência contemporânea de alto padrão típica de **Sydney, Austrália** (arquitetura costeira/harbour moderna: combinação de fachada em concreto aparente, brises de madeira natural, pedra arenito/sandstone australiano, grandes panos de vidro do chão ao teto e paisagismo nativo).
- **Interação Principal ("Efeito de Apagar/Acender Luzes"):**
  - Implemente um controle interativo elegante (um dimmer/switch tátil estilo keypad de luxo ou seletores de cena: *"Luzes Apagadas (Dusk)"*, *"Iluminação Arquitetônica & Jardim"*, *"Cenário Completo (Full Glow)"*).
  - **Comportamento do Efeito:** Quando o usuário acionar o efeito de apagar/acender as luzes ou alternar os cenários:
    1. A imagem da casa em Sydney faz uma transição suave (crossfade em camadas ou máscara de iluminação CSS/Canvas) mostrando o contraste entre a casa apagada/sem vida ao entardecer e a casa perfeitamente iluminada (destacando uplights no paisagismo, fitas de LED aquecendo a arquitetura em madeira e iluminação interna aconchegante em 2700K/3000K).
    2. **Imersão no Viewport:** Ao ativar o modo de visualização noturna/luzes na seção, aplique uma transição suave que escurece sutilmente o entorno da dobra (efeito *lights-off / theater mode* suave) para fazer o brilho quente da iluminação arquitetônica da casa saltar aos olhos, retornando ao fundo branco quando o usuário rolar para fora ou alternar o estado.
    3. Adicione *hotspots* (pontos interativos discretos) sobre a foto da casa que, no hover/clique, revelam detalhes técnicos da execução (ex: *Automação DALI-2*, *Iluminação de Fachada e Paisagismo*, *Controle Circadiano*).

## 5. REDESIGN DAS DEMAIS DOBRAS (2ª DOBRA E 4ª DOBRA EM DIANTE)
Reestruture o restante do conteúdo atual do site da Quantum mantendo o **fundo branco**, a fonte **Urbanist** e as cores do **`DESIGN.md`**, aplicando um visual moderno, limpo e atraente:

1. **2ª Dobra (Pilares e Modalidades de Atuação):**
   - Apresente os pilares da Quantum (Design & Construção, Automação & Iluminação Arquitetônica, Segurança & Infraestrutura) em um layout editorial inspirado na Kichler (ex: grid assimétrico ou lista interativa com preview visual ao passar o mouse), substituindo blocos de texto pesados por leitura escaneável e elegante.
2. **3ª Dobra:** *(A nova seção interativa da casa em Sydney com efeito de apagar luzes descrita no item 4).*
3. **4ª Dobra (Diferenciais de Engenharia & Rigor Operacional):**
   - Destaque a proposta de valor para construtores, arquitetos e proprietários em Sydney (previsibilidade de orçamento, cumprimento de cronograma, integração sem atrito) usando tipografia de impacto, indicadores numéricos limpos (`tabular-nums`) e ícones de traço fino padronizados.
4. **5ª Dobra (Setores Atendidos — Residencial, Comercial, Industrial & Projetos):**
   - Crie uma vitrine limpa em fundo branco com abas ou carrossel editorial fluido mostrando a versatilidade técnica da empresa e projetos de referência em Sydney.
5. **CTA Final & Footer:**
   - Seção de conversão de alto impacto sobre fundo claro (ou leve contraste dentro da paleta do `DESIGN.md`) seguida de um rodapé organizado, minimalista e alinhado ao grid.

## 6. EXECUÇÃO PASSO A PASSO
1. Primeiro, leia o `DESIGN.md` e inspecione a estrutura atual do projeto para garantir que a Hero (1ª dobra) não será tocada.
2. Gere/configure os assets visuais da casa estilo Sydney para a 3ª dobra (garantindo os estados de luz acesa/apagada).
3. Implemente as alterações da 2ª dobra até o Footer mantendo código semântico, responsivo (mobile-first) e animações performáticas (`transform` e `opacity`).