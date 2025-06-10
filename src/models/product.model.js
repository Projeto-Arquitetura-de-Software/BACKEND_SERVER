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

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
};