import {
  Container,
  Desktop,
  Mobile,
  Content,
  ButtonMenu,
} from "./StyledComponents";
import {
  BsFillCartFill,
  BsFillHouseDoorFill,
  BsFillPersonFill,
} from "react-icons/bs";

export const Layout = ({ children }) => {
  return (
    <Container>
      {/* Para mostrar un NavBar solo en Desktop */}
      <Desktop>
        <ButtonMenu to='/'>Inicio</ButtonMenu>
        <div>
          <ButtonMenu to='/cart'>
            <BsFillCartFill />
          </ButtonMenu>
          <ButtonMenu to='/login'>
            <BsFillPersonFill />
          </ButtonMenu>
        </div>
      </Desktop>

      <Content>{children}</Content>

      {/* Para mostrar un NavBar inferior solo en Mobile */}
      <Mobile>
        <ButtonMenu to='/'>
          <BsFillHouseDoorFill />
        </ButtonMenu>
        <ButtonMenu to='/cart'>
          <BsFillCartFill />
        </ButtonMenu>
        <ButtonMenu to='/login'>
          <BsFillPersonFill />
        </ButtonMenu>
      </Mobile>
    </Container>
  );
};
