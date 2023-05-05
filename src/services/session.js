const USER_DATA = {
  name: "Juan Montero",
  username: "monterocjl",
  email: "jmontero.dev@gmail.com",
  password: "123456",
  token: "PROMARTm0lxFy7vqIV8fOhzmcsH2b3KJaU",
};

function loginService(credentials) {
  const { email, password } = credentials;

  if (email === USER_DATA.email && password === USER_DATA.password) {
    return {
      name: USER_DATA.name,
      username: USER_DATA.username,
      email: USER_DATA.email,
      token: USER_DATA.token,
    };
  } else {
    return { message: "Email y/o contraseña incorrectos", status: 403 };
  }
}

export { loginService };
