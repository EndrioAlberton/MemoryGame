# Jogo da Memória

Instruções:
1. Você receberá um conjunto de imagens ou símbolos para criar o jogo da memória.
2. O jogo da memória deve consistir em um tabuleiro de cartas viradas para baixo, que podem ser viradas uma de cada vez.
3. O objetivo é encontrar pares de cartas idênticas.
4. Quando dois cartões idênticos são virados, eles permanecem visíveis.
5. O jogo deve permitir que o jogador saiba quantas tentativas foram feitas e quantos pares foram encontrados.
6. Após todas as cartas serem encontradas, o jogo deve indicar que o jogo foi concluído e registrar o número de tentativas necessárias.

Especificações:
- Tamanho do tabuleiro (número de cartas): 4x4 (16 cartas), 6x6(36 cartas), ou 8x8 (64 cartas)
- Conjunto de imagens: conforme o tamanho selecionado pelo usuário
- Layout do tabuleiro (quantas linhas e colunas): dependente do tamanho selecionado
- Interface do usuário: Gráfica
- Tecnologias: TypeScript com React
- Componentes chave:
  1. Header: exibe "Jogo da Memória" e um botão para voltar ao componente StartGame
  2. StartGame: tela inicial onde o usuário escolhe o tamanho do jogo
  3. Board: componente que representa o tabuleiro do jogo com as cartas
  4. Card: componente que representa cada carta do jogo
  5. Todos os componentes devem estar localizados na pasta "components" em arquivos separados.
  6. Estilização: deve ser feita utilizando styled-components.
  7. O jogo deve incluir um timer que conta a partir do momento em que o usuário vira a primeira carta.
  8. Deve haver um contador de jogadas para registrar o número de tentativas feitas pelo jogador.

Exemplo de entrada:
- Tamanho do tabuleiro: 4x4 (16 cartas), 6x6(36 cartas), ou 8x8 (64 cartas)
- Conjunto de imagens: depende do tamanho selecionado pelo usuário
- Interface do usuário: Gráfica