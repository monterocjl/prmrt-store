import { useSelector } from "react-redux";
import { Layout } from "../../components/Layout/Layout";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { Profile } from "../../components/Profile/Profile";

export default function Login() {
  const user = useSelector((state) => state.user);

  // Mostrará el formulario de login o los datos de usuario dependiendo de la existencia de un token
  return <Layout>{user.token ? <Profile /> : <LoginForm />}</Layout>;
}
