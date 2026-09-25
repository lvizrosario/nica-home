# NICA — Home local

Protótipo responsivo com carrossel shadcn/ui (React + Embla) na seção Novidades.

Iniciar: `npm start` nesta pasta. Abrir http://127.0.0.1:4173.
Também é possível abrir `dist/index.html` diretamente, sem servidor.

## Carrossel Novidades

Oito imagens, quatro por página acima de 1000 px, duas no tablet e uma no celular. Avança a cada 5 segundos quando está visível; pausa com mouse, interação, aba oculta ou preferência de movimento reduzido. Há indicadores de página, teclado e arraste. As setas aparecem nas laterais das fotos ao passar o mouse ou navegar por teclado; ficam ocultas em telas de toque. O botão de reprodução e o contador foram removidos. Favoritos e sacola continuam usando o catálogo da home.

Para atualizar as coleções, edite `src/releases.json`. Cada item tem `id` único e `productId` correspondente ao catálogo em `dist/app.js`. Para uma foto individual, adicione `src` (por exemplo `assets/colecao/foto.jpg`) e `alt`; copie a foto para `dist/assets/colecao/`. Sem `src`, usa o recorte da imagem de referência. Os quatro primeiros itens mostram as fotos atuais; os quatro seguintes são detalhes provisórios dessas mesmas fotos, não novos produtos.

Após editar componentes ou a lista: `npm ci`, `npm run build` e `npm run check`. Os arquivos gerados em `dist/carousel.js` e `dist/carousel.css` são servidos pelo mesmo endereço local. Não há upload ou publicação automática de coleções nesta etapa.

Fontes dos componentes: https://ui.shadcn.com/r/styles/new-york/carousel.json e https://ui.shadcn.com/r/styles/new-york/button.json (shadcn/ui, MIT). Fontes originais em `references/shadcn-*.json`; implementação local em `src/components/ui/`. Adaptações: import local, textos em português, classe do viewport e limpeza do evento reInit. Estilo NICA composto em `src/carousel.css`, sem reset global do Tailwind.

## Base e decisões

- Fonte principal: NICA_WEBSITE_TEMPLATE.jpg e imagem original extraída do Brand Book, página 11.
- Paleta oficial: Espresso #3E2C23, Cream #F6F1E9, Oat #D8C9B8, Black #111111, Wine #5A1F2D.
- Histórico do Figma: https://www.figma.com/design/0mvY5Iybo204XgiSiFmFih?node-id=6-2. Consulta atual bloqueada pela cota Starter; decisões recuperadas da tarefa “Planejar projeto NICA no Figma”.
- Jost provisória, menus em português, assinaturas em inglês e coleção Skin 01.
- Referência dominante: template NICA. Preservados fotografia quente, tipografia leve, cantos retos, sequência editorial e cores oficiais. Hero recomposto em duas áreas para textos reais e adaptação mobile. Bloco Skin 01 apresenta a coleção, sem confundi-la com a assinatura olfativa.
- Práticas complementares Refero: hierarquia, foco visível, dimensões de imagem reservadas e controle acessível. Consulta online do Refero indisponível por assinatura.

## Limites desta entrega

Home implementada em HTML/CSS/JS. Busca, menu mobile, favoritos, escolha de tamanho e sacola funcionam em memória; recarregar reinicia a demonstração. NICA Club valida o formato do e-mail e informa que não houve envio. Conta é um aviso contextual, sem login. Nenhuma compra, pagamento, autenticação ou inscrição real.

Preços e frete são exemplos do template. Os tamanhos demonstram a interface, não uma grade comercial confirmada. Logo tipográfico e fonte provisórios. As fotografias são janelas CSS da imagem original do template: substituir por arquivos individuais de alta resolução na produção. Nenhuma imagem foi gerada ou retocada. O restante da interface é texto e elementos editáveis.

Próxima integração: adaptação ao tema Nuvemshop, catálogo, conta e checkout. Não é um tema Nuvemshop instalável. Site não publicado.


## Menu principal adaptativo
Navigation Menu oficial shadcn em src/components/ui/navigation-menu.tsx (fonte original em references/shadcn-navigation-menu.json). Composição e detecção da direção de rolagem em src/navbar.tsx, incluída no mesmo bundle React do carrossel. O cabeçalho se recolhe ao descer após 160 px e reaparece ao subir; tolerâncias de direção evitam oscilações. Mantém o espaço original no layout, reaparece com foco de teclado, permanece disponível com diálogos abertos e respeita movimento reduzido. O menu mobile existente foi preservado.

