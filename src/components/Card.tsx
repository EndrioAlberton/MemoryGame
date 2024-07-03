import styled from 'styled-components';

const CardContainer = styled.div<{ isFlipped: boolean }>`
  width: 100px;
  height: 100px;
  background-color: ${({ isFlipped }) => (isFlipped ? '#bfa36d' : '#8b5a2b')}; 
  border: 2px solid #654321; 
  border-radius: 8px; 
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${({ isFlipped }) => (isFlipped ? 'default' : 'pointer')};
  font-family: 'Baloo', cursive;
  font-size: 24px;
`;

interface CardProps {
  id: number;
  value: string;
  isFlipped: boolean;
  onClick: (id: number) => void;
}

const Card: React.FC<CardProps> = ({ id, value, isFlipped, onClick }) => {
  const handleClick = () => {
    if (!isFlipped) {
      onClick(id);
    }
  };

  return (
    <CardContainer isFlipped={isFlipped} onClick={handleClick}>
      {isFlipped ? value : null}
    </CardContainer>
  );
};

export default Card;
