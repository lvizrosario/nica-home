# NICA — personalizações Nuvemshop

Tema: Ipanema. Loja: https://nicaactive.lojavirtualnuvem.com.br/

## Estado

- Última proposta: [v0.3.0](releases/v0.3.0/NOTAS.md), NEW IN, categorias, comunidade, FAQ e rodapé.
- Versão publicada: **não confirmada**. Não há acesso ao histórico do editor nesta etapa.
- Fonte oficial para aplicação: pacote dentro de releases/, após revisão. O arquivo antigo typography/ipanema-cabecalho.css é referência histórica.

## Processo

1. Criar branch para a alteração.
2. Copiar a última versão para nova pasta releases/vX.Y.Z e modificar somente a nova versão. Cada pacote deve conter o CSS completo aplicável, assets necessários e documentação atualizada.
3. Registrar motivo, diferença visual, arquivos, dependências do tema, evidências, limitações, aplicação e reversão. Atualizar CHANGELOG.
4. Testar em prévia desktop 1440px, mobile 390/320px e limites dos breakpoints alterados. Conferir busca, conta, sacola, menu e rolagem quando afetados.
5. Abrir PR. Manter rascunho se houver verificações essenciais pendentes. Aprovação deve vir de revisão, não ser presumida pelo autor.
6. Após aprovação e autorização para publicar, salvar uma cópia exata do CSS global atual da loja antes de substituí-lo; preservar customizações externas ao pacote.
7. Substituir o bloco anterior da NICA pelo pacote completo novo, sem acumular versões. Conferir a prévia, publicar e registrar o resultado em PUBLICACOES.md.

Versões: patch para correções e ajustes; minor para novos componentes; major para alterações incompatíveis. Cada alteração entregue, inclusive uma correção durante revisão, ganha versão própria. Git registra os commits e PRs; as pastas preservam os artefatos entregues.

Mesclar um PR não publica na Nuvemshop. Nenhuma rotina de deploy automático foi criada.
