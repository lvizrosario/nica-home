# Verificação da home — 24/09/2026

- Servidor local respondeu HTTP 200.
- Sintaxe JavaScript e servidor válidos.
- Imagens locais e fonte Jost carregadas.
- Revisão visual em desktop 1440 px e mobile 390/320 px.
- Sem rolagem horizontal em 1440, 390 e 320 px.
- Busca por legging retornou o produto correto.
- Produto abriu, tamanho M selecionado, item adicionado à sacola.
- Subtotal correto e remoção atualizaram o contador.
- Favoritos alternaram estado e mensagem.
- Menu mobile abriu e fechou.
- Formulário validou o e-mail e informou que nenhum cadastro foi enviado.

Capturas em `references/desktop-final.png` e `references/mobile-final.png`.

## Carrossel Novidades

- Compilação e TypeScript sem erros.
- 8 itens, 4 visíveis em desktop 1440 px; 1 visível em mobile 390 px, sem rolagem horizontal da página.
- Avanço automático confirmado após 5 segundos, setas alternando as duas páginas no desktop.
- Favorito selecionado e produto adicionado à sacola pelo segundo grupo de imagens.
- Gesto de toque avançou para 02/08; seta do teclado avançou para 03/08.
- Movimento reduzido desativa reprodução automática.
- Sem erros JavaScript no navegador.
- Testes em contexto separado, sem restringir a janela usada pelo usuário.
- Capturas: `references/carousel-desktop.png`, `references/carousel-mobile.png`.

Controles simplificados: botão de reprodução e contador ausentes; setas com opacidade 0 em repouso e 1 no hover, alinhadas às fotos; clique avança a página. No celular, setas ocultas e indicadores navegáveis, sem rolagem horizontal.

Menu adaptativo: verificado em 1440 px e 390 px. Visível no topo; fora da tela ao descer; reaparece ao subir e ao receber foco. Busca e menu mobile abriram normalmente; retorno ao topo correto; movimento reduzido com transição 0s; sem erros JavaScript ou overflow horizontal. Capturas navbar-desktop.png e navbar-mobile.png.

