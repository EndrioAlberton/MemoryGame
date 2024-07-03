import { useState } from 'react';
import Header from './components/Header';
import StartGame from './components/StartGame';
import Board from './components/Board';
import BoardSize from './types/boardSizes';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  padding: 0; 
  background-color: #eee2d9;
`;

const MainContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const App: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState<BoardSize | null>(null);

  const handleSizeSelection = (size: BoardSize) => {
    setSelectedSize(size);
  };

  const handleGameEnd = () => {
    setSelectedSize(null);
  };

  return (
    <AppContainer>
      <Header />
      <MainContent>
        {!selectedSize ? <StartGame onSelectSize={handleSizeSelection} /> : <Board size={selectedSize} onGameEnd={handleGameEnd} />}
      </MainContent>
    </AppContainer>
  );
};

export default App;
