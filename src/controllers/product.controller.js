const model = require('../models/product.model');
const { createSuccessResponse, createErrorResponse } = require('../utils/response');

const addProduct = async (req, res) => {
  try {
    const product = await model.createProduct(req.body);
    res.status(201).json(createSuccessResponse(product));
  } catch (error) {
    console.error('ERRO AO CRIAR PRODUTO:', error);
    res.status(400).json(createErrorResponse(400, error.message));
  }
};


const listProducts = async (req, res) => {
  try {
    const products = await model.getAllProducts();
    res.status(200).json(createSuccessResponse(products));
  } catch (error) {
    console.error('ERRO AO LISTAR PRODUTOS:', error);
    res.status(500).json(createErrorResponse(500, 'Erro interno do servidor.'));
  }
};

const getProductById = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);

    if (isNaN(id)) {
      return res.status(400).json(createErrorResponse(400, 'ID inválido.'));
    }

    const product = await model.getProductById(id);

    if (!product) {
      return res.status(404).json(createErrorResponse(404, 'Produto não encontrado.'));
    }

    res.status(200).json(createSuccessResponse(product));

  } catch (error) {
    console.error('ERRO AO BUSCAR PRODUTO POR ID:', error);
    res.status(500).json(createErrorResponse(500, 'Erro interno do servidor.'));
  }
};

module.exports = {
  addProduct,
  listProducts,
  getProductById,
};