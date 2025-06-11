const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
console.log('[LOG DE CONEXÃO] Tentando usar a DATABASE_URL:', process.env.DATABASE_URL);

if (!process.env.DATABASE_URL) {
  console.error('ERRO CRÍTICO: A variável de ambiente DATABASE_URL não foi encontrada ou está vazia. Verifique a referência da variável compartilhada no Railway.');
  process.exit(1); 
}

module.exports = {
  query: (text, params) => pool.query(text, params),
};