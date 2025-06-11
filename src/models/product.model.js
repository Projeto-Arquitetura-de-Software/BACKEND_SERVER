const repository = require('../repositories/product.repository');

const createProduct = async (productData) => {
  if (productData.price < 0) {
    throw new Error('O preço do produto não pode ser negativo.');
  }
  if (!productData.name) {
    throw new Error('O nome do produto é obrigatório.');
  }
  return await repository.create(productData);
};

const getAllProducts = async () => {
  return await repository.findAll();
};

const getProductById = async (id) => {
  return await repository.findById(id);
};

const updateProduct = async (id, productData) => {
  return await repository.update(id, productData);
};

const partiallyUpdateProduct = async (id, productData) => {
  return await repository.partialUpdate(id, productData);
};

const deleteProduct = async (id) => {
  return await repository.deleteById(id);
};

const checkConnection = async () => {
  return await repository.checkConnection();
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  partiallyUpdateProduct,
  deleteProduct,
  checkConnection,
};