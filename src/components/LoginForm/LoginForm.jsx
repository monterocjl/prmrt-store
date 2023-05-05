import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginService } from "../../services/session";
import { addUser } from "../../features/user/userSlice";
import {
  Form,
  Container,
  Input,
  Button,
  ErrorMessage,
} from "./StyledComponents";

export const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    const response = loginService(formData);
    if (response?.status === 403) {
      setErrorMessage(response.message);
    } else {
      dispatch(addUser(response));
      navigate("/");
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          id='email'
          name='email'
          type='email'
          value={formData.email}
          onChange={handleChange}
          placeholder='example@mail.com'
        />

        <Input
          id='password'
          name='password'
          type='password'
          value={formData.password}
          onChange={handleChange}
          placeholder='******'
        />
        <Button type='submit'>Iniciar sesión</Button>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </Form>
    </Container>
  );
};
