const {
  getStore,
  postAddProduct,
  postUpdateProduct,
  deleteProduct,
} = require("../../controllers/controllerStore");

const resolvers = {
  Query: {
    //> Products
    showProducts: () => {
      return getStore();
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
  },
};
module.exports = resolvers;
