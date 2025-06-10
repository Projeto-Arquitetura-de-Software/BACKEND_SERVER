const express = require('express');
const productRoutes = require('./src/routes/product.routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api', productRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});