const {
  redirectToHome,
  deleteAccount,
} = require("../../services/servicesLogOut");

const logOut = async () => {
  return await redirectToHome();
};
const deleteUser = async (idUser) => {
  return await deleteAccount(idUser);
};

module.exports = { deleteUser, logOut };
