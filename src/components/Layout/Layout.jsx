import {
  Container,
  Desktop,
  Mobile,
  Content,
  ButtonMenu,
} from "./StyledComponents";

export const Layout = ({ children }) => {
  return (
    <Container>
      <Desktop>
        <ButtonMenu to='/'>Inicio</ButtonMenu>
        <ButtonMenu to='/cart'>Carrito</ButtonMenu>
      </Desktop>
      <Content>{children}</Content>
      <Mobile>
        <ButtonMenu to='/'>Inicio</ButtonMenu>
        <ButtonMenu to='/cart'>Carrito</ButtonMenu>
      </Mobile>
    </Container>
  );
};
