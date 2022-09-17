const {
  getStore,
  postAddProduct,
  postUpdateProduct,
  deleteProduct,
} = require("../controllers/controllerStore");
const {
  getCart,
  addproductInCart,
  deleteProductInCart,
  deleteAll,
  buyAll,
} = require("../controllers/controllerCart");
const getAccount = require("../controllers/controllerAccount");
const postSignIn = require("../controllers/controllerSignIn");
const { logOut, deleteUser } = require("../controllers/controllerLogOut");
const postLogIn = require("../controllers/controllerLogin");

const resolvers = {
  Query: {
    //> Products
    showProducts: () => {
      return getStore();
    },
    //> /////////////////////////////////////////////
    //> Carts
    showCartByUserId: (_, { id }) => {
      return getCart(id);
    },
    //> Account
    showAccount: (_, { idUser }) => {
      return getAccount(idUser);
    },
    //> /////////////////////////////////////////////
    //> logOut
    logOut: () => {
      return logOut();
    },
    //> /////////////////////////////////////////////
  },
  Mutation: {
    //> Products
    addProduct: (_, { input }) => {
      return postAddProduct({ ...input });
    },
    updateProduct: (_, { id, input }) => {
      return postUpdateProduct(id, { ...input });
    },
    deleteProduct: (_, { id }) => {
      return deleteProduct(id);
    },
    //> /////////////////////////////////////////////
    //> Cart
    addProductInCart: (_, { idUser, idProduct }) => {
      return addproductInCart(idUser, idProduct);
    },
    deleteProductInCart: (_, { idUser, idProduct }) => {
      return deleteProductInCart(idUser, idProduct);
    },
    deleteCart: (_, { idUser }) => {
      return deleteAll(idUser);
    },
    buyCart: (_, { idUser }) => {
      return buyAll(idUser);
    },
    //> /////////////////////////////////////////////
    //> SignIn
    signIn: (_, { input }) => {
      return postSignIn(input);
    },
    //> /////////////////////////////////////////////
    //> deleteUser
    deleteUser: (_, { idUser }) => {
      return deleteUser(idUser);
    },
    //> /////////////////////////////////////////////
    //> logIn
    logIn: (_, { input }) => {
      return postLogIn(input);
    },
  },
};
module.exports = resolvers;
