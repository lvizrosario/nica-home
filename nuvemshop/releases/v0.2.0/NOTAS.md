# v0.2.0 — Busca e banners

Data: 05/10/2026, America/Sao_Paulo. Rascunho para revisão; não aplicado na Nuvemshop.

## Busca

O campo nativo abre sobre as ações da navegação. busca.css posiciona o painel 16px abaixo do botão, com largura de 340px, fundo Cream, borda Oat, sombra discreta, campo de 48px e foco visível. Mantém o formulário GET /search/ e os eventos nativos do Ipanema. Importants de geometria e campo são necessários para superar estilos do tema/editor observados.

Aplicação a partir de 1024px. Entre 1024 e 1199px alinha à esquerda do botão (busca fica no lado esquerdo no tema nativo); em 1200px ou mais alinha à direita. Celulares e tablets menores mantêm a busca nativa.

Verificação temporária na loja pública: painel abaixo do botão, dentro da tela e sem overlap com Conta/Sacola em 1440 e 1024px. Busca mobile abre em 390 e 320px. Em 768px foi observado overflow da página; esta versão não aplica regras nessa largura. Não valida checkout. Resultados/sugestões com catálogo real e comportamento de fechamento devem ser conferidos na prévia do editor.

## Arquivos e aplicação

- cabecalho.css: pacote completo, substitui o bloco NICA anterior. Não acumular versões.
- busca.css: incremento isolado se o restante do CSS já foi aplicado. Usar um ou outro.
- busca-desktop.png: captura da simulação.
- banners/: três PNGs gerados, 1942×809px, proporção aproximada 2.4:1, cada um abaixo de 3MB. São artes de campanha, não fotos documentais do catálogo. Conferir fidelidade das peças antes de publicar.

No editor Ipanema, adicionar três slides na seção Banner rotativo. Usar proporção desktop próxima de 2.4:1 para não cortar letras. Remover os títulos/descrições de exemplo do editor porque as artes já contêm texto. Criar botões reais no editor, com posição inferior à esquerda e margem que não cubra a chamada:

| Slide | Arquivo | Botão sugerido | Destino |
|---|---|---|---|
| Campanha | 01-made-to-move.png | Conheça a coleção | /produtos/ ou categoria Skin 01 real |
| Qualidade | 02-conforto-qualidade.png | Explore Skin 01 | Categoria real ou /produtos/ |
| Lifestyle | 03-move-with-nica.png | Faça parte do NICA Club | Página/formulário Club quando disponível |

Não configurar um link de Club inexistente. Texto alternativo sugerido: mulher em movimento com conjunto chocolate; detalhe do tecido e acabamento NICA; momento de pausa após o treino com conjunto chocolate e cardigan Oat.

As imagens são versões desktop. Não forçar recorte central no mobile, pois corta texto e sujeito; conservar configuração mobile atual até aprovação de artes verticais próprias. As fontes visuais das imagens foram geradas e podem diferir dos arquivos Raleway/Jost oficiais. Referências: anexo de campanha e moodboard do Brand Book, com paleta Espresso/Cream/Oat. O banner 2 comunica tecido, acabamento e conforto; não afirma tecnologia científica sem ficha técnica.

## Revisão e reversão

Antes da aplicação salvar CSS global e imagens/configurações anteriores dos slides. Revisar PR, conferir prévia desktop/mobile, submissão de busca, sugestões e rolagem. Restaurar o CSS salvo ou pacote v0.1.1 para reverter; restaurar slides anteriores para reverter banners. Merge do PR não publica.
