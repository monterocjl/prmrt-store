//Usuario simulado
const USER_DATA = {
  name: "Juan Montero",
  username: "monterocjl",
  email: "jmontero.dev@gmail.com",
  password: "123456",
  token: "PROMARTm0lxFy7vqIV8fOhzmcsH2b3KJaU",
};

// Este servicio es una simulación de un request a una API para loguearse
function loginService(credentials) {
  const { email, password } = credentials;

  if (email === USER_DATA.email && password === USER_DATA.password) {
    //Si la información ingresada es correcta, retorna un objeto con los datos de usuario
    return {
      name: USER_DATA.name,
      username: USER_DATA.username,
      email: USER_DATA.email,
      token: USER_DATA.token,
    };
  } else {
    //Si la información ingresada es incorrecta, retorna un objeto con mensaje y estado de error
    return { message: "Email y/o contraseña incorrectos", status: 403 };
  }
}

export { loginService };
