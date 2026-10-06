# Fluxo de mudanças Nuvemshop

Preservar as instruções de ../AGENTS.md. Para qualquer alteração destinada à loja Nuvemshop:

- Documentar junto ao código/assets em nuvemshop/; não entregar CSS avulso como fonte oficial.
- Criar nova pasta releases/vX.Y.Z a cada entrega alterada, com pacote completo, notas, validação e reversão. Nunca sobrescrever versões anteriores. Correções incrementam patch; novos componentes, minor; mudanças incompatíveis, major.
- Atualizar CHANGELOG.md e README.md de nuvemshop. Não incluir rascunhos de imagens defeituosos no pacote.
- Criar branch e PR com escopo restrito, evidências e limitações. Anexar o PR à tarefa.
- Manter PR em rascunho enquanto houver validações essenciais pendentes. Não confundir criação de PR com revisão aprovada.
- Não aplicar na Nuvemshop antes da revisão e autorização de publicação. Merge não significa publicação. Registrar data, versão aplicada e responsável somente após confirmação.
- Preservar mudanças locais alheias ao escopo. Não incluir todo o workspace indiscriminadamente.
