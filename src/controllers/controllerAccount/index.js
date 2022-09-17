const { searchUserById } = require("../../Repository/usersRepository");

const getAccount = async (idUser) => {
  const account = await searchUserById(idUser);
  return account;
};

module.exports = getAccount;
