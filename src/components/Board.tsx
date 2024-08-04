import { useState, useEffect } from 'react';
import styled from 'styled-components';
import BoardSize from '../types/boardSizes';
import Card from './Card';

// Estilização do container do tabuleiro
const BoardContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  color: #3D2C29;
  position: relative;
  @media (max-width: 480px) {
  top: -20vw;
  }
`;

// Estilização do grid que contém os cards do tabuleiro
const BoardGrid = styled.div<{ size: number }>`
  display: grid;
  grid-template-columns: repeat(${props => props.size}, 1fr);
  grid-template-rows: repeat(${props => props.size}, 1fr);
  gap: 10px;
  max-width: 800px;
  margin: auto;
`;

// Estilização do container de cada card
const CardContainer = styled.div`
  width: 100%; 
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 2px solid #eee2d9;

  @media (max-width: 768px) {
    width: 80%; 
    height: 80%;
    border: 1px solid #eee2d9; 
  }

  @media (max-width: 480px) {
    width: 80%; 
    height: 80%;
    border: 1px solid #ccc; 
  }
`;

// Estilização do container de estatísticas do jogo
const StatsContainer = styled.div`
  font-family: 'Baloo', cursive;
  display: flex;
  justify-content: space-between;
  margin: 10px; 

  @media (max-width: 480px) {
    font-size: 26px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

  }
`;

const Paragraph = styled.p`
  margin-right: 10px; /* Espaço à direita de cada parágrafo */

    @media (max-width: 480px) {
    margin: 2px;
  }
`;

// Interface representando as propriedades do componente Board
interface BoardProps {
  size: BoardSize;
  onGameEnd: () => void;
}

// Interface representando os dados de um card
interface CardData {
  id: number;
  value: string;
  isFlipped: boolean;
}

// Função para gerar cards aleatórios com emojis
const generateRandomCards = (totalPairs: number): CardData[] => {
  const emojis = [
    '🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🦁', '🐮', '🐯', '🐸', '🐵', '🐦', '🐤', '🐧',
    '🦅', '🦆', '🦉', '🦇', '🐺', '🐗', '🐴', '🦄', '🐝', '🐛', '🦋', '🐌', '🐞', '🐜', '🦟', '🦗',
    '🕷️', '🦂', '🐢', '🐍', '🦎', '🦖', '🦕', '🐙', '🦑', '🦐', '🦞', '🦀', '🐡', '🐠', '🐟', '🐬',
    '🐳', '🐋', '🦈', '🐊', '🐅', '🐆', '🦓', '🦍', '🦧', '🐘', '🦛', '🦏', '🐪', '🐫', '🦒', '🐃',
    '🐂', '🐄', '🐎', '🐖', '🐏', '🐑', '🦙', '🐐', '🦌', '🐕', '🐩', '🦮', '🐕‍🦺', '🐈', '🐈‍⬛',
    '🐓', '🦃', '🦚', '🦜', '🦢', '🦩', '🕊️', '🐇', '🦝', '🦨', '🦡', '🦦', '🦥', '🐁', '🐀', '🐿️',
    '🦔'
  ];

  // Cria um array de cards contendo pares de emojis.
  const cards = emojis.slice(0, totalPairs).flatMap((emoji, index) => [
    { id: index * 2, value: emoji, isFlipped: false },
    { id: index * 2 + 1, value: emoji, isFlipped: false }
  ]);

  // Embaralha os cards aleatoriamente para tornar o jogo mais desafiador.
  const shuffledCards = [...cards].sort(() => Math.random() - 0.5);
  return shuffledCards.map((card, index) => ({ ...card, id: index + 1 })); // ID único
};

// Componente Board que representa o tabuleiro do jogo
const Board: React.FC<BoardProps> = ({ size, onGameEnd }) => {
  const totalPairs = size * size / 2;
  const [cards, setCards] = useState<CardData[]>(generateRandomCards(totalPairs));
  const [flippedCardIds, setFlippedCardIds] = useState<number[]>([]);//Cartas que estão viradas
  const [matchedCardIds, setMatchedCardIds] = useState<number[]>([]);//cartas que encontraram o par
  const [moves, setMoves] = useState<number>(0);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [matchesCount, setMatchesCount] = useState<number>(0);
  const [timer, setTimer] = useState<number | null>(null);

  // Inicia o temporizador se ainda não estiver em andamento.
  useEffect(() => {
    if (flippedCardIds.length === 1 && !startTime) {
      setStartTime(new Date());
    }
  }, [flippedCardIds, startTime]);

  // Este useEffect é acionado sempre que o conjunto de cartas coincidentes é completo.
  useEffect(() => {
    if (matchedCardIds.length === totalPairs * 2) {
      onGameEnd();
      clearInterval(timer!);
      alert(`Parabéns! Você completou o jogo em ${moves} movimentos e ${elapsedTime} segundos.`);
    }
  }, [matchedCardIds, totalPairs, onGameEnd, moves, elapsedTime, timer]);

  // Este useEffect é acionado para iniciar e atualizar o temporizador do jogo.
  // Calcula o tempo decorrido desde o início do jogo e atualiza o estado correspondente.
  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (startTime) {
        const now = new Date();
        const elapsed = Math.floor((now.getTime() - startTime.getTime()) / 1000);
        setElapsedTime(elapsed);
      }
    }, 1000);

    setTimer(timerInterval);

    return () => clearInterval(timerInterval);
  }, [startTime]);

// Esta função lida com o clique em um card individual.
// Altera o estado dos cards conforme necessário com base no clique do jogador.
const handleCardClick = (id: number) => {
  // Verifica se o card já está virado ou já foi correspondido.
  const cardClicked = cards.find(card => card.id === id);
  if (!cardClicked || cardClicked.isFlipped || matchedCardIds.includes(id)) {
    return alert("Essa carta já está virada, escolha olha carta!"); // Retorna se o card já estiver virado ou correspondido.
  }

  // Verifica se há menos de dois cards virados.
  if (flippedCardIds.length < 2) {
    const updatedCards = cards.map(card =>
      card.id === id ? { ...card, isFlipped: true } : card
    );
    setFlippedCardIds([...flippedCardIds, id]);
    setCards(updatedCards);
  }

  // Verifica se dois cards foram virados.
  if (flippedCardIds.length === 1) {
    const [firstCardId] = flippedCardIds;
    const firstCard = cards.find(card => card.id === firstCardId);
    const secondCard = cards.find(card => card.id === id);

    // Verifica se os dois cards virados coincidem.
    if (firstCard && secondCard && firstCard.value === secondCard.value) {
      // Atualiza o estado dos cards correspondentes e a contagem de movimentos.
      setMatchedCardIds([...matchedCardIds, firstCard.id, secondCard.id]);
      setFlippedCardIds([]);
      setMatchesCount(matchesCount + 1);
    } else {
      // Se os cards não coincidirem, vire-os de volta após um breve intervalo.
      setTimeout(() => {
        const updatedCards = cards.map(card =>
          flippedCardIds.includes(card.id) ? { ...card, isFlipped: false } : card
        );
        setCards(updatedCards);
        setFlippedCardIds([]);
      }, 1000);
    }
    setMoves(moves + 1); // Incrementa o número total de movimentos.
  }
};



  return (
    <BoardContainer>
      <StatsContainer>
        <Paragraph>Movimentos: {moves} </Paragraph>
        <Paragraph> Número de acertos: {matchesCount} </Paragraph>
        <Paragraph> Tempo decorrido: {elapsedTime} segundos</Paragraph>
      </StatsContainer>
      <BoardGrid size={size}>
        {cards.map((card) => (
          <CardContainer
            key={card.id} // Define uma chave única para cada card.
            onClick={() => handleCardClick(card.id)}
          >
            <Card
              id={card.id}
              value={card.value}
              isFlipped={card.isFlipped}
              onClick={() => handleCardClick(card.id)}
            />
          </CardContainer>
        ))}
      </BoardGrid>
    </BoardContainer>
  );
};

export default Board;
