const {
  searchUserByEmail,
  comparePassword,
} = require("../../Repository/usersRepository");

const postSignIn = async (input) => {
  const password = input.password;
  const email = input.email;
  const user = await searchUserByEmail(email);
  const statusPassword = await comparePassword(password, user.password);
  console.log(user);
  if (!user) {
    console.log("usuario inexistente");
    return false;
  }
  if (!statusPassword) {
    console.log("contrasena incorrecta");
    return false;
  }

  return user;
};

module.exports = postSignIn;
