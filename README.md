# Jogo da Memória

Especificações:
- Tamanho do tabuleiro (número de cartas): 4x4 (16 cartas), 6x6(36 cartas), ou 8x8 (64 cartas)
- Conjunto de emojis: conforme o tamanho selecionado pelo usuário
- Layout do tabuleiro: dependente do tamanho selecionado
- Interface do usuário: Gráfica
- Tecnologias: TypeScript com React
- Componentes chave:
  1. Header: exibe "Jogo da Memória"
  2. StartGame: tela inicial onde o usuário escolhe o tamanho do jogo
  3. Board: componente que representa o tabuleiro do jogo com as cartas
  4. Card: componente que representa cada carta do jogo
  5. Todos os componentes devem estão localizados na pasta "components" em arquivos separados.
  6. Estilização: foi feita utilizando styled-components.
  7. O jogo deve incluir um timer que conta a partir do momento em que o usuário vira a primeira carta.
  8. Deve haver um contador de jogadas para registrar o número de tentativas feitas pelo jogador.
  9. Haverá um contador de acertos, ao usuário completar todos os acertos aparece um aviso falando que o jogo acabou, com o tempo e o número de movimentos do jogador.
