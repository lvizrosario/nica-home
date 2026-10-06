# v0.1.0 — Cabeçalho Ipanema

Data: 05/10/2026, America/Sao_Paulo. Estado: **rascunho para revisão; aplicação não confirmada**.

## Objetivo e referência

O cabeçalho atual tem navegação em uma segunda linha. Este CSS propõe uma linha única no desktop, conforme referência do Brand Book: navegação à esquerda, logo centralizada e ações à direita. Usa Cream #F6F1E9 e Espresso #3E2C23.

## Artefatos

- cabecalho.css: cópia exata do CSS previamente entregue, agora versionada.
- previa.png: captura da aplicação temporária no navegador sobre a loja pública; não comprova publicação.

## Escopo e dependências

Aplica em larguras a partir de 1200px; abaixo, mantém o tema nativo. Seletores principais: .js-head-main, .head-row, .logo-container, .nav-desktop-container e utilitários de busca, conta e sacola. Depende da estrutura Ipanema observada em 05/10/2026; uma atualização do tema pode exigir revalidação. Não altera a barra Espresso, nomes de links, total da sacola ou catálogo. Não carrega fontes nem depende do React/Shadcn do protótipo.

## Validação disponível

- Aplicação temporária no navegador público, sem salvar no administrador.
- Sem overflow horizontal nos testes anteriores de 1440, 1200, 1024, 390 e 320px.
- Cabeçalho medido em 88px no desktop.
- Busca abriu e recebeu texto. Isso não equivale a testar resultados ou a finalização da compra.
- Captura final revisada visualmente; existem diferenças frente ao Brand Book, incluindo rótulos e valor da sacola.

## Pendências antes de aprovar

- Revalidar o arquivo final no editor real da loja nos tamanhos acima.
- Conferir abertura e posicionamento completo da busca, dropdown da conta, sacola, navegação por teclado e cabeçalho durante rolagem.
- Conferir menus longos/submenus e outras páginas que compartilham o cabeçalho.
- Confirmar se já existe CSS personalizado na loja e guardar cópia antes de aplicar.

## Aplicação após aprovação

No CSS personalizado global, colar cabecalho.css sem tags style. Se houver versão anterior deste pacote, substituir seu bloco, não duplicar. Preservar outros estilos. Conferir a prévia antes de publicar. Registrar a aplicação em nuvemshop/PUBLICACOES.md.

## Reversão

Restaurar o CSS global salvo antes da aplicação. Se este for o único bloco acrescentado, remover exatamente o bloco deste pacote. Não apagar todo o CSS da loja. Conferir desktop/mobile e registrar a reversão.
