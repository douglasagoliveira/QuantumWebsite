# Checklist do projeto

## Vitrine (estado atual alvo)

- [ ] Todas as telas da spec existem
- [ ] Hero preservada
- [ ] Dados editoriais contam a mesma historia de posicionamento
- [ ] Links e anchors entre dobras funcionam
- [ ] Funciona bem no celular
- [ ] Sem banco, sem login, sem pagamento
- [ ] Textos e claims permanecem fieis ao material real da Quantum

## Cofre (proxima camada, ainda fora da V1)

- [ ] Leads guardados em banco de dados
- [ ] Solucao de login pronta e conhecida, se houver area autenticada
- [ ] Regra de acesso no servidor, nao so na tela
- [ ] Nenhuma chave no codigo
- [ ] Teste com contas separadas, se a camada existir

## Caixa (proxima camada, ainda fora da V1)

- [ ] Pagamento funcionando em sandbox
- [ ] Confirmacao so apos evento validado
- [ ] Regras de cancelamento e devolucao tratadas
- [ ] Nenhuma chave de pagamento no codigo

## 8 portas de seguranca

- [ ] Senhas e chaves ficam no `.env`
- [ ] Login nao e caseiro, quando existir
- [ ] Regra de dono / acesso fica no servidor, quando existir
- [ ] Pagamento so confirma apos validacao no backend, quando existir
- [ ] Nenhum dado sensivel retorna para quem nao deve ver
- [ ] Campos de entrada validam dados estranhos
- [ ] Erros nao expoem stack trace ou detalhes internos
- [ ] Backups e segredos sao tratados fora do codigo

## Antes de publicar

- [ ] Caminho feliz testado na home completa
- [ ] Experiencia mobile revisada
- [ ] Hero continua intacta
- [ ] Formulario final valida nome, email e telefone conforme a spec
- [ ] Nenhum segredo real foi commitado
- [ ] Claims, licencas e contatos conferidos com o material da Quantum
- [ ] `spec.md` atualizado antes do codigo final
