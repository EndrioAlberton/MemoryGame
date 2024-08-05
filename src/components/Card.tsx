import styled from 'styled-components';

const CardContainer = styled.div<{ isFlipped: boolean; size: number }>`
  width: ${({ size }) => (size === 4 ? '100px' : size === 6 ? '75px' : '50px')};
  height: ${({ size }) => (size === 4 ? '100px' : size === 6 ? '75px' : '50px')};
  background-color: ${({ isFlipped }) => (isFlipped ? '#bfa36d' : '#8b5a2b')}; 
  border: 2px solid #654321; 
  border-radius: 8px; 
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${({ isFlipped }) => (isFlipped ? 'default' : 'pointer')};
  font-family: 'Baloo', cursive;
  font-size: ${({ size }) => (size === 4 ? '50px' : size === 6 ? '35px' : '25px')};

  @media (max-width: 768px) {
    width: ${({ size }) => (size === 4 ? '80px' : size === 6 ? '60px' : '40px')};
    height: ${({ size }) => (size === 4 ? '80px' : size === 6 ? '60px' : '40px')};
    font-size: ${({ size }) => (size === 4 ? '50px' : size === 6 ? '35px' : '25px')};
  }

  @media (max-width: 480px) {
    width: ${({ size }) => (size === 4 ? '70px' : size === 6 ? '52px' : '35px')};
    height: ${({ size }) => (size === 4 ? '70px' : size === 6 ? '52px' : '35px')};
    font-size: ${({ size }) => (size === 4 ? '50px' : size === 6 ? '35px' : '25px')};
    }
`;


interface CardProps {
  id: number;
  value: string;
  isFlipped: boolean;
  onClick: (id: number) => void;
  size: number; // Adicione esta propriedade
}

const Card: React.FC<CardProps> = ({ id, value, isFlipped, onClick, size }) => {
  const handleClick = () => {
    if (!isFlipped) {
      onClick(id);
    }
  };

  return (
    <CardContainer isFlipped={isFlipped} onClick={handleClick} size={size}>
      {isFlipped ? value : null}
    </CardContainer>
  );
};

export default Card;
