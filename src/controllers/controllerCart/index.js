const { sendMailTicket } = require("../../utils/nodeMailer/nodeMailer");
const {
  searchCart,
  searchProducts,
  findIndexProduct,
  addInCart,
  calculateTotalPrice,
  reloadCart,
  deleteInCart,
  deleteAllCart,
} = require("../../services/servicesCart");
const { searchProductById } = require("../../Repository/productsRepository");
const { searchUserById } = require("../../Repository/usersRepository");

const getCart = async (id) => {
  const cart = await searchCart(id);
  return cart;
};

const addproductInCart = async (idUser, idProduct) => {
  const product = await searchProductById(idProduct);
  const cartInBase = await searchCart(idUser);
  const products = await searchProducts(idUser);
  const index = findIndexProduct(products, product);
  const cartItems = addInCart(products, index, product);
  const precioTotal = calculateTotalPrice(cartItems);
  const cartInfo = await reloadCart(precioTotal, cartItems, cartInBase);
  return cartInfo;
};

const deleteProductInCart = async (idUser, idProduct) => {
  const product = await searchProductById(idProduct);
  const cartInBase = await searchCart(idUser);
  const products = await searchProducts(idUser);
  const index = findIndexProduct(products, product);
  const cartItems = deleteInCart(products, index, product);
  const precioTotal = calculateTotalPrice(cartItems);
  const cartInfo = await reloadCart(precioTotal, cartItems, cartInBase);
  return cartInfo;
};

const deleteAll = async (idUser) => {
  const cartInBase = await searchCart(idUser);
  const cartInfo = await deleteAllCart(cartInBase);
  return cartInfo;
};

const buyAll = async (idUser) => {
  const { email, user, phone } = await searchUserById(idUser);
  const { products, precioTotal } = await searchCart(idUser);
  return sendMailTicket(products, precioTotal, email, user);
};

module.exports = {
  getCart,
  addproductInCart,
  deleteProductInCart,
  deleteAll,
  buyAll,
};
