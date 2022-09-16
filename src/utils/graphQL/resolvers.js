const {
  getStore,
  postAddProduct,
  postUpdateProduct,
  deleteProduct,
} = require("../../controllers/controllerStore");
const {
  getCart,
  addproductInCart,
  deleteProductInCart,
  deleteAll,
  buyAll,
} = require("../../controllers/controllerCart");
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
  },
};
module.exports = resolvers;
