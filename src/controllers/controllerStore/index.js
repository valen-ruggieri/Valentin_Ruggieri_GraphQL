const {
  getAllProducts,
  createProduct,
  updateProductById,
  deleteProductById,
} = require("../../Repository/productsRepository");
const { searchUserById } = require("../../Repository/usersRepository");

const productoConfig = require("../../services/servicesProducts");

const getStore = async () => {
  const productos = await getAllProducts();
  return productos;
};

const deleteProduct = async (id) => {
  const productDelete = await deleteProductById(id);
  return productDelete;
};

const postAddProduct = async (body) => {
  const product = productoConfig(body);
  const productCreate = await createProduct(product);
  return productCreate;
};

const postUpdateProduct = async (id, body) => {
  const product = productoConfig(body);
  const productUpdate = await updateProductById(id, product);
  return productUpdate;
};

module.exports = {
  getStore,
  postAddProduct,
  postUpdateProduct,
  deleteProduct,
};
