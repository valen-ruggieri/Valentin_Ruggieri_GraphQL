const { createCart } = require("../../Repository/cartsRepository");
const {
  createUser,
  searchUserByEmail,
  encryptPassword,
} = require("../../Repository/usersRepository");
const { sendMailWelcome } = require("../../utils/nodeMailer/nodeMailer");

const postLogIn = async (input) => {
  const { email, password } = input;
  const exists = await searchUserByEmail(email);

  if (!exists) {
    const cartInit = {
      precioTotal: 0,
      products: [],
    };
    const cart = await createCart(cartInit);
    const cartUID = cart._id;
    const { user, userType, address, age, phone, image } = input;
    const userLoged = await createUser({
      user: user,
      email: email,
      password: await encryptPassword(password),
      userType: userType,
      address: address,
      age: age,
      phone: phone,
      image: image,
      cartId: cartUID,
    });

    sendMailWelcome(user, email, userType, address, age, phone);
    return userLoged;
  }
  if (exists) {
    return false;
  }
};

module.exports = postLogIn;
