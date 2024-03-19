import styled from 'styled-components';
import BoardSize from '../types/boardSizes';

const StartGameContainer = styled.div`
  text-align: center;
  margin-top: 10px;
`;

const Button = styled.button`
  margin: 0 10px; 
  padding: 10px 20px; 
  border-radius: 8px;
  border: 1px solid transparent;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.25s, border-color 0.25s;
  &:hover {
    background-color: #646cff;
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
