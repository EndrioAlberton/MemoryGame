import styled from 'styled-components';

const HeaderContainer = styled.div`
  text-align: center;
  background-color: #8b5a2b; 
  color: #fff;
  border-bottom: 2px solid #654321; 
  font-family: 'Baloo', cursive;
  width: 100%;
  `;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Jogo da Memória</h1>
    </HeaderContainer>
  );
};

export default Header;
