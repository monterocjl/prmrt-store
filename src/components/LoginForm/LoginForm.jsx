import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginService } from "../../services/session";
import { addUser } from "../../features/user/userSlice";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    const response = loginService(formData);
    if (response?.status === 403) {
      console.log(response);
    } else {
      dispatch(addUser(response));
    }
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        id='email'
        name='email'
        type='email'
        value={formData.email}
        onChange={handleChange}
        placeholder='example@mail.com'
      />

      <input
        id='password'
        name='password'
        type='password'
        value={formData.password}
        onChange={handleChange}
        placeholder='******'
      />
      <button type='submit'>Iniciar sesión</button>
    </form>
  );
};
