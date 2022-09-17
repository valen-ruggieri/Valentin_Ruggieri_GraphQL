const { deleteSessionAll } = require("../../Repository/sessionsRepository");
const { deleteUserById } = require("../../Repository/usersRepository");
const logger = require("../../utils/loggers/loggers");

async function redirectToHome(res) {
  try {
    setTimeout(async () => {
      await deleteSessionAll();
      logger.info("las sesiones fueron eliminadas correctamente");
      
    }, 800);
    return "redirect to /home";
  } catch (error) {
    logger.error(error);
  }
}

async function deleteUser(idUser) {
  try {
    const user = await deleteUserById(idUser);
    return user
  } catch (error) {
    logger.error(error);
  }
}

async function deleteSession() {
  try {
    await deleteSessionAll();
  } catch (error) {
    logger.error(error);
  }
}

async function deleteAccount(idUser) {
  try {
    await deleteSession();
    const user = await deleteUser(idUser);
    return user
   
  } catch (error) {
    logger.error(error);
  }
}
module.exports = { redirectToHome, deleteAccount };
