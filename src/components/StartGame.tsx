import styled from 'styled-components';
import BoardSize from '../types/boardSizes';

const StartGameContainer = styled.div`
  text-align: center;
  margin-top: 20px; /* Aumentei o espaço acima */
  font-family: 'Baloo', cursive;
`;

const Button = styled.button`
  margin: 0 10px;
  padding: 12px 24px; 
  border-radius: 12px; 
  font-size: 1.2em; 
  font-weight: 600; 
  font-family: 'Baloo', cursive;
  background-color: #bfa36d;
  color: #1a1a1a; 
  cursor: pointer;
  transition: background-color 0.25s;
  &:hover {
    background-color: #8b5a2b;
  }
`;

interface StartGameProps {
  onSelectSize: (size: BoardSize) => void;
}

const StartGame: React.FC<StartGameProps> = ({ onSelectSize }) => {
  const handleSizeSelection = (size: BoardSize) => {
    onSelectSize(size);
  };

  return (
    <StartGameContainer>
      <h2>Escolha o Tamanho do Jogo:</h2>
      <Button onClick={() => handleSizeSelection(4)}>4x4</Button>
      <Button onClick={() => handleSizeSelection(6)}>6x6</Button>
      <Button onClick={() => handleSizeSelection(8)}>8x8</Button>
    </StartGameContainer>
  );
};

export default StartGame;
