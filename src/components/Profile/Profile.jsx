import { useSelector } from "react-redux";
import { Container, Text, Button } from "./StyledComponents";

export const Profile = () => {
  const user = useSelector((state) => state.user);

  return (
    <Container>
      <Text>Username: {user.username}</Text>
      <Text>Name: {user.name}</Text>
      <Text>Email: {user.email}</Text>
      <Button>Cerrar sesión</Button>
    </Container>
  );
};
