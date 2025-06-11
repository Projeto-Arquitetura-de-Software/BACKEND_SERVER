const model = require('../models/product.model');
const { createSuccessResponse, createErrorResponse } = require('../utils/response');

const addProduct = async (req, res) => {
   console.log(`[TESTE DE EXECUÇÃO] Função 'addProduct' foi chamada em: ${new Date()}`)

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

const updateProduct = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) return res.status(400).json(createErrorResponse(400, 'ID inválido.'));

    const updatedProduct = await model.updateProduct(id, req.body);
    if (!updatedProduct) return res.status(404).json(createErrorResponse(404, 'Produto não encontrado.'));
    
    res.status(200).json(createSuccessResponse(updatedProduct));
  } catch (error) {
    console.error('[ERRO NO PUT]', error);
    res.status(400).json(createErrorResponse(400, error.message));
  }
};

const partiallyUpdateProduct = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) return res.status(400).json(createErrorResponse(400, 'ID inválido.'));

    const updatedProduct = await model.partiallyUpdateProduct(id, req.body);
    if (!updatedProduct) return res.status(404).json(createErrorResponse(404, 'Produto não encontrado.'));

    res.status(200).json(createSuccessResponse(updatedProduct));
  } catch (error) {
    console.error('[ERRO NO PATCH]', error);
    res.status(400).json(createErrorResponse(400, error.message));
  }
};

const deleteProduct = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) return res.status(400).json(createErrorResponse(400, 'ID inválido.'));

    const result = await model.deleteProduct(id);
    if (result.rowCount === 0) return res.status(404).json(createErrorResponse(404, 'Produto não encontrado.'));
    
    res.status(204).send(); // 204 No Content é a resposta correta para um DELETE bem-sucedido
  } catch (error) {
    console.error('[ERRO NO DELETE]', error);
    res.status(500).json(createErrorResponse(500, 'Erro interno do servidor.'));
  }
};

const checkHealth = async (req, res) => {
  try {
    await model.checkConnection(); 
    res.status(200).json({ status: 'ok', database: 'connected' });
  } catch (error) {
    console.error('[ERRO NO HEALTH CHECK]', error);
    res.status(503).json({ status: 'error', database: 'disconnected', details: error.message });
  }
};

module.exports = {
  addProduct,
  listProducts,
  getProductById,
  updateProduct,
  partiallyUpdateProduct,
  deleteProduct,
  checkHealth,
};