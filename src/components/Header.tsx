import styled from 'styled-components';

const HeaderContainer = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-bottom: 1px solid #ccc;
  font-family: 'Baloo', cursive;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Jogo da Memória</h1>
    </HeaderContainer>
  );
};

export default Header;
