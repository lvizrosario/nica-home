# v0.1.1 — Frete centralizado no desktop

Data: 05/10/2026 (America/Sao_Paulo). Proposta para revisão, publicação não confirmada.

## Mudança

Centraliza conjuntamente o ícone e texto de frete na faixa Espresso, a partir de 1024px. Usa três colunas, com laterais de mesma largura. O bloco identificado como NICA CLUB na inspeção anterior fica na coluna direita quando presente. Abaixo de 1024px não adiciona estilos.

Referência: Brand Book NICA e solicitação de Luiz. Seletores identificados na loja pública: .js-navigation-bar, #ns-block-nav_icon_text, #ns-block-item_1 e #ns-block-nav-icon-text-group_pwkz. IDs de blocos podem mudar se forem recriados no editor.

## Artefatos e aplicação

- cabecalho.css: pacote completo, contendo v0.1.0 e o incremento atual. Substituir o bloco NICA anterior, sem duplicar versões.
- frete.css: somente este ajuste. Para testar exclusivamente a faixa de frete, adicionar este arquivo ao final do CSS global, sem tags style. Não adicionar também o pacote completo.
- previa-frete.png: captura da faixa com o ajuste temporário.

Antes de aplicar, guardar cópia do CSS global vigente; conferir na prévia e revisar o PR. Aplicação/publicação na loja depende da autorização do usuário após revisão.

## Verificação

Na loja pública atual existe somente o bloco frete na faixa e ele já aparece centralizado. Com o ajuste temporário, diferença do centro do conjunto para o centro da faixa inferior a 0.01px em 1440 e 1024px; sem overflow. Em 390 e 320px, a faixa segue oculta pelo tema e não é afetada pelo media query. Captura revisada visualmente.

Não há confirmação de aplicação real no editor. O cabeçalho completo herda as pendências documentadas na v0.1.0. Revalidar quando recriar blocos ou modificar os textos.

## Reversão

Para o incremento avulso, remover exatamente frete.css do CSS global. Para o pacote completo, restaurar o bloco v0.1.0 ou a cópia salva antes de aplicar. Preservar outras personalizações da loja.
