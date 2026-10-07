# v0.3.0 — Restante da home NICA

Data: 06/10/2026, America/Sao_Paulo. Proposta em revisão; não publicada.

Referências: Brand Book NICA e anexos de Luiz. Referência secundária: https://versianiswim.com.br/ (newsletter VIP → FAQ → categorias/ajuda/sobre → redes, pagamentos e informações legais). Não copiar políticas, avaliações, benefícios comerciais ou textos da Versiani. Preservar paleta Espresso/Cream/Oat, Raleway nos destaques e Jost na leitura.

## Ordem dos blocos no editor

1. Banner rotativo da v0.2.0.
2. Produtos em destaque: NEW IN. A seção atual featured_products_1 já usa carrossel, quatro colunas desktop e uma mobile. Selecionar pelo menos oito produtos reais para haver navegação; não cadastrar oito produtos fictícios. O CSS usa o Swiper nativo, sem novo JS. Setas aparecem ao passar o mouse sobre a área da seção e ao navegar pelo teclado. Em touch permanecem disponíveis; swipe nativo continua.
3. Banners: Tops, Leggings, Shorts. Na seção atual banners_grid_3_vertical há dois blocos. Adicionar o terceiro no editor (+ adicionar bloco → Banner), configurar grade em três colunas desktop e uma mobile, título/link e foto de cada categoria. O CSS não cria categorias ou blocos. Usar fotos reais de peças dessas categorias; não associar foto de top ao link de short. Criar categorias primeiro e copiar seus URLs reais. Nenhum slug de categoria foi presumido no código.
4. Imagem com texto: MOVE WITH NICA, parágrafo e botão Faça parte. Usar lifestyle.png, foto gerada baseada no Brand Book. Pode montar pelos blocos nativos com direção horizontal desktop/vertical mobile. Alternativa pronta: seção Personalizada → bloco Código → lifestyle-beneficios.html. Substituir URL_DA_IMAGEM_LIFESTYLE pela URL após upload. Essa alternativa também inclui os benefícios; não duplicar benefícios nativos.
5. Ícone com texto, quatro itens: Cuidado em cada detalhe; Conforto que te acompanha; Peças atemporais para a sua rotina; Movimento com propósito. Evitar prometer performance técnica sem especificação. Usar folha, linhas, diamante e coração, sem fundo.
6. Newsletter NATIVA: título Faça parte do NICA CLUB; descrição Receba novidades, lançamentos e ofertas da NICA. Um convite para acompanhar a vida em movimento.; campo Seu e-mail; botão Quero fazer parte. Centralizar título/descrição e formulário, largura do formulário aproximadamente 420px, fundo Oat e textos Espresso. Adicionar âncora nica-club acima do formulário com um bloco Código contendo <span id="nica-club"></span>. Não inserir formulário HTML de demonstração; a seção nativa faz a captação. Confirmar na plataforma onde os contatos são armazenados e a ferramenta de envio usada antes de anunciar grupo VIP ativo. E-mail não inscreve automaticamente em grupo WhatsApp.
7. FAQ: usar seção nativa Perguntas frequentes ou bloco Código com faq.html. Respostas propostas orientam consulta por peça/CEP sem inventar sustentação, prazos, composição ou política de trocas. Substituir referências a páginas somente após cadastrar conteúdo real.
8. Rodapé nativo: institucional + Categorias + Ajuda + redes; incluir pagamentos habilitados, envios e faixa legal do próprio tema. Aplicar Espresso e Cream. Não desenhar bandeiras de pagamento não habilitadas.

## Conteúdo do rodapé

Institucional: A NICA acompanha a vida em movimento. Activewear para o treino, para o depois e para os dias que pedem equilíbrio, conforto e liberdade.

Categorias: Tops, Leggings, Shorts, Skin 01 (URLs reais). Ajuda: Guia de medidas, Trocas e devoluções, Entrega e rastreamento, Contato, Perguntas frequentes. NICA: Nossa história, NICA Club, Instagram confirmado da marca. Faixa final: copyright nativo, privacidade, termos e identificação da empresa cadastrada. Não inventar CNPJ, atendimento, redes ou condições comerciais. Remover texto de exemplo sobre três gerações.

## Pacote e aplicação

- site.css: completo, inclui cabeçalho/busca/frete da v0.2.0 e os estilos atuais. Substituir bloco anterior da NICA, não empilhar versões.
- home.css: somente novos estilos, se a v0.2.0 já estiver aplicada. Não aplicar ambos.
- lifestyle-beneficios.html e faq.html: blocos opcionais prontos, sem JS, com conteúdo sem conexão de cadastro. Usar alternativa nativa ou código; não duplicar.
- lifestyle.png: upload da imagem; lifestyle-preview.jpg é somente cópia leve para visualização.
- Capturas: NEW IN na loja com produtos de exemplo; final-*.png são simulações dos blocos inseridos temporariamente. Não comprovam publicação nem integração de newsletter.

Os seletores NEW IN/categorias/rodapé foram inspecionados na loja pública. Newsletter ainda não existe na loja inspecionada; estilos de data-section-type=newsletter precisam ser revalidados após sua criação. O terceiro banner e os menus também dependem de cadastro no editor. CSS não substitui esses passos.

## Validação e reversão

Carrossel nativo: quatro itens no desktop, seta avançou o Swiper. Estados hover/foco implementados com opacidade e sem alterar o mecanismo. FAQ details/summary funciona sem JS. Blocos de lifestyle/benefícios/FAQ conferidos em 1440, 390 e 320px. Antes de publicar, conferir fonte real, oito produtos, fotos/URLs de categorias, newsletter (teste de cadastro), FAQ, menus e meios de pagamento; PR permanece em rascunho por essas pendências.

Guardar CSS global e configuração anterior dos blocos. Reverter restaurando v0.2.0/cópia anterior e removendo exclusivamente os blocos novos. Merge não publica na Nuvemshop.

Imagem: ferramenta image_gen integrada. Prompt: remover todos os textos do banner lifestyle v0.2.0, preservar mulher, roupa chocolate, caneca Cream, cardigan Oat e luz quente; reenquadrar em foto 4:3 para bloco imagem/texto. Confirmar fidelidade comercial das peças geradas antes de publicar.
