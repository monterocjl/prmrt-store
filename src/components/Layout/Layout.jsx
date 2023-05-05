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
