import styled from 'styled-components';
import BoardSize from '../types/boardSizes';

const StartGameContainer = styled.div`
  text-align: center;
  font-family: 'Baloo', cursive;
  color: #3D2C29;
  font-size: 1.6em;
`;

const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;    
  }
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
  @media (max-width: 480px) {
    margin: 10px;
    background-color: red;
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
      <ContainerButton>
        <Button onClick={() => handleSizeSelection(4)}>4x4</Button>
        <Button onClick={() => handleSizeSelection(6)}>6x6</Button>
        <Button onClick={() => handleSizeSelection(8)}>8x8</Button>
      </ContainerButton>
    </StartGameContainer>
  );
};

export default StartGame;
