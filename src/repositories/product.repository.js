    const db = require('./db');

const findAll = async () => {
  const { rows } = await db.query('SELECT * FROM products ORDER BY id ASC');
  return rows;
};

const findById = async (id) => {
  const { rows } = await db.query('SELECT * FROM products WHERE id = $1', [id]);
  return rows[0];
};

const create = async ({ name, price, stock }) => {
  const { rows } = await db.query(
    'INSERT INTO products (name, price, stock) VALUES ($1, $2, $3) RETURNING *',
    [name, price, stock]
  );
  return rows[0];
};

module.exports = {
  findAll,
  findById,
  create,
};