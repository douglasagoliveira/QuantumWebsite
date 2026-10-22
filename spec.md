# Quantum Electrical & Technological Services - Homepage institucional de captacao

Homepage institucional, em camada Vitrine, para gerar contatos qualificados de builders, architects, developers e proprietarios de alto padrao em Greater Sydney, preservando a hero atual e reorganizando da segunda dobra ate o footer.

## Quem usa

- **Builder**: avalia se a Quantum consegue proteger margem, cronograma e coordenacao tecnica antes da obra travar.
- **Architect / designer**: avalia se a Quantum entende iluminacao arquitetonica, automacao e instalacao discreta sem comprometer o projeto.
- **Developer / stakeholder comercial**: avalia confianca de entrega, amplitude tecnica e rigor operacional.
- **Proprietario residencial de alto padrao**: avalia se a Quantum consegue assumir energia, iluminacao, automacao e infraestrutura sob um unico ponto de responsabilidade.
- **Equipe interna da Quantum**: usa a homepage para apresentar posicionamento, provas de capacidade e converter visitas em contato.

## O que cada um faz

1. Como builder, quero entender rapidamente que a Quantum entra cedo no projeto, para reduzir variacoes no meio da obra.
2. Como builder, quero ver que a Quantum trabalha com escopo, preco e programa antes da execucao, para proteger margem e prazo.
3. Como architect, quero ver provas de que a iluminacao e tratada como engenharia e nao decoracao, para confiar a execucao da visao do projeto.
4. Como architect, quero que a homepage mostre integracao de automacao, iluminacao e infraestrutura, para evitar retrabalho de compatibilizacao.
5. Como developer, quero enxergar uma empresa tecnicamente ampla e confiavel, para reduzir risco de contratacao.
6. Como proprietario, quero entender a diferenca entre uma casa comum e uma casa com iluminacao arquitetonica bem resolvida, para justificar uma conversa premium.
7. Como visitante mobile, quero navegar por uma pagina clara e responsiva, para avaliar a empresa pelo celular sem friccao.
8. Como visitante, quero ver pilares de servico bem organizados, para saber se a Quantum cobre meu tipo de escopo.
9. Como visitante, quero uma demonstracao visual forte de "The Lighting Effect", para perceber valor sem depender so de texto.
10. Como visitante, quero ver setores atendidos e exemplos de projetos, para saber se a empresa ja entregou algo parecido com meu contexto.
11. Como visitante, quero ver o diretor e o compromisso executivo da empresa, para sentir responsabilidade real por tras da marca.
12. Como lead qualificado, quero poder ligar ou enviar email imediatamente, para iniciar contato no canal que eu preferir.
13. Como lead qualificado, quero preencher um formulario simples, para registrar meu interesse sem sair da pagina.
14. Como equipe da Quantum, quero preservar os textos aprovados e os ativos reais da marca, para evitar claims inventadas.
15. Como equipe da Quantum, quero manter a hero e o header intactos, para nao quebrar a parte ja aprovada do projeto.
16. Como equipe da Quantum, quero centralizar dados editoriais em um ponto unico, para atualizar contatos, setores e projetos sem retrabalho.
17. Como equipe da Quantum, quero que a homepage funcione como Vitrine completa antes de backend, para validar posicionamento e conversao primeiro.
18. Como equipe da Quantum, quero que futuras mudancas comecem atualizando a spec, para evitar implementacao sem direcao.

## Telas

- **Hero**: dobra principal cinematografica existente, com scroll scrub, navegacao externa e CTA principal; deve ser preservada.
- **Capabilities / Pillars**: segunda dobra com os tres pilares centrais da Quantum em formato editorial interativo.
- **The Lighting Effect**: terceira dobra com demonstracao interativa de iluminacao arquitetonica e hotspots tecnicos.
- **Engineering**: dobra de rigor operacional, metricas e proposta de valor para builders, architects e owners.
- **Sectors**: dobra com visao por setor atendido, incluindo residencial, comercial, industrial e special projects.
- **Projects**: dobra de portfolio com trabalhos selecionados e filtros de categoria.
- **Founder Statement**: dobra com carta / manifesto do diretor e reforco de accountability.
- **Final CTA / Contact**: dobra final com telefone, email, cobertura e formulario de enquiry.
- **Footer**: fechamento com logo, servicos, company, coverage, navegacao da pagina e selos institucionais.

### Comportamento visual das telas

- As dobras editoriais claras alternam principalmente entre `q-shell` e `q-white`.
- A hero continua como excecao visual preservada.
- `Projects` e `Footer` permanecem como zonas escuras dedicadas.
- `The Lighting Effect` pode migrar de superficie clara para palco escuro quando o theater mode estiver ativo.
- O sistema de componentes do redesign usa cards e paineis de pequena a media curvatura, nao uma linguagem geral de botoes pill.

## Dados

- **Contato**: telefone `0406 025 213`, email `info@quantumelec.net`, regiao `Sydney / New South Wales / Australia`, nome do diretor `Geovani Percurandi`, cargo `Managing Director`.
- **Navegacao da home**: anchors para capabilities, lighting, engineering, sectors, projects e contact.
- **Pilares**: `Design & Construction`, `Automation & Architectural Lighting`, `Security & Infrastructure`, com tagline, body, specs e deliverables.
- **Cenas de iluminacao**: tres estados nomeados (`Lights Off`, `Facade & Garden`, `Full Scene`) com nivel, nota tecnica e imagem.
- **Hotspots**: anotacoes tecnicas com titulo, codigo, descricao e metadados visiveis conforme nivel de iluminacao.
- **Metricas e audiencias**: metricas de operacao e mensagens especificas para builders, architects e owners.
- **Setores**: residencial, comercial, industrial e projetos especiais, com texto, stats, servicos e imagem editorial.
- **Projetos**: titulo, categoria, localizacao, especificacao e imagem de cada item do portfolio.
- **Formulario final**: nome, email, telefone, tipo de projeto e notas de escopo.
- **Persistencia**: na versao 1 nao ha banco de dados; os dados sao editoriais, carregados do proprio projeto.
- **Sistema visual em runtime**: tokens, utilitarios tipograficos e motion partem de `src/styles/global.css`.

## Regras

- **Escopo protegido**: a hero, o header e a navbar nao podem ser redesenhados nesta versao 1.
- **Tipografia**: da segunda dobra em diante, a fonte principal e `Urbanist`.
- **Camadas tipograficas**: `IBM Plex Mono` fica reservada para labels tecnicos, serials e contadores; `Cormorant Garamond` entra como acento editorial pontual.
- **Cor de acento**: o teal institucional continua sendo o principal driver de interacao.
- **Cor em runtime**: a homepage atual usa o token teal `#00B3A6` em runtime, conforme `global.css`.
- **Pilares**: a dobra de capacidades deve apresentar exatamente **3** pilares principais.
- **Lighting Effect**: a experiencia deve ter exatamente **3** cenas ancora com niveis `0`, `56` e `100`.
- **Hotspots**: cada hotspot so aparece quando o nivel de iluminacao atinge seu limite minimo configurado.
- **Theater mode**: o escurecimento do entorno so acontece enquanto a dobra de iluminacao estiver ativa e iluminada.
- **Setores**: o carrossel editorial de setores roda automaticamente a cada **7 segundos** ate o usuario interagir.
- **Cards e paineis**: a linguagem predominante de raios na Vitrine atual fica entre `3px` e `18px`, conforme o tipo de componente.
- **CTA institucional**: nas dobras abaixo da hero, CTAs podem ser links sublinhados ou botoes retos / quase retos; pill fica restrito a badges, status e alguns elementos da hero.
- **Contato sempre visivel**: telefone e email devem continuar disponiveis na dobra final e no footer.
- **Validacao de nome**: o formulario exige pelo menos **2 caracteres** no nome.
- **Validacao de email**: o formulario exige email em formato valido.
- **Validacao de telefone**: o telefone e opcional, mas se preenchido precisa ter pelo menos **8 digitos**.
- **Resposta prometida**: a mensagem de sucesso informa retorno em ate **1 business day**.
- **Disponibilidade destacada**: a homepage pode afirmar `24/7 emergency call-out`, pois isso ja aparece no material do projeto.
- **Licenca eletrica**: pode exibir `478965C`, pois esse dado ja existe no conteudo da marca.
- **Licenca de seguranca**: pode exibir `000109137`, pois esse dado ja existe no conteudo da marca.
- **V1 sem backend**: a versao 1 nao inclui banco, login, pagamento ou CRM.

## Criterios de pronto

- [ ] A hero foi preservada sem alteracao estrutural ou visual indevida?
- [ ] A homepage comunica claramente a proposta de valor da Quantum da segunda dobra ao footer?
- [ ] O sistema visual da segunda dobra em diante segue `DESIGN.md` e os tokens ativos de `src/styles/global.css`?
- [ ] Os tres pilares de servico estao claros e escaneaveis?
- [ ] A dobra "The Lighting Effect" demonstra valor de iluminacao arquitetonica por interacao, e nao so por texto?
- [ ] Builders, architects, developers e owners conseguem se reconhecer na mensagem da pagina?
- [ ] O visitante consegue identificar setores atendidos e exemplos de projetos reais?
- [ ] O site evita claims inventadas, premios nao confirmados ou metricas nao comprovadas?
- [ ] O visitante consegue iniciar contato por telefone, email ou formulario?
- [ ] O formulario bloqueia nome curto, email invalido e telefone incompleto?
- [ ] A tipografia usa Urbanist como base, IBM Plex Mono como camada tecnica e Cormorant como acento editorial sem competir com o corpo da interface?
- [ ] A experiencia continua coerente em mobile?
- [ ] A experiencia continua compreensivel com motion reduzido ou indisponivel?
- [ ] A pagina pode ser considerada uma Vitrine completa, mesmo sem backend?

## Pagina 02 — Electrical Services (`/electrical-instalations/`)

Segunda pagina do site, criada sobre o mesmo sistema visual da home (a home permanece intacta). No menu, o item aparece como **Electrical Services**.

- **Rota**: `/electrical-instalations/` (`src/pages/electrical-instalations.astro`).
- **Fonte de conteudo**: pagina publicada em `quantumelectricalsolutions.com.au/electrical-instalations/`, com textos preservados em ingles australiano. Nenhum claim novo foi criado.
- **Dados editoriais**: `src/data/electrical.ts` (hero, duas modalidades, capabilities, lista de instalacoes e projetos).
- **Dobras**:
  - `PageHeader`: header institucional sticky com a mesma navegacao e o mesmo telefone da home.
  - `ServicesHero`: H1 "Integrated electrical engineering", sublinha editorial "Frictionless constructional and design" e composicao de midia com licencas reais (`478965C`, `000109137`).
  - `Modalities`: as duas modalidades operacionais (Design e Constructional) em lista interativa com preview fixo.
  - `Capabilities`: dobra escura controlada com os tres deliverables-chave (eCert/BCNSW, maximum demand/Ausgrid-Endeavour, SimPRO).
  - `Installations`: registro tecnico completo das 27 instalacoes publicadas.
  - `Work`: "Some of our projects" em galeria editorial clara.
  - `FinalCta`: bloco de conversao reaproveitado da home, ancorado em `#contact`.
  - `PageFooter`: footer navy com navegacao da subpagina e links de servico.
- **Regras**: a hero/header da home nao foram alterados; o header novo e exclusivo da subpagina e vive em `src/components/sections/PageHeader.astro`.
- **Formulario**: reaproveita `FinalCta` (mesma validacao de nome, email e telefone).

## Fora da versao 1

- Banco de dados para leads.
- Login e perfis de usuario.
- CRM ou integracao com automacao comercial.
- Envio real de emails pelo formulario.
- Pagamentos ou qualquer camada Caixa.
- Dashboard interno.
- Multi-page completo com novas paginas editoriais (a pagina Electrical Services e a primeira excecao aprovada).
- Area autenticada para clientes ou time interno.
