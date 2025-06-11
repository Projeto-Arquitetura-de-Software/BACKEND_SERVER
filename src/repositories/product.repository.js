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

const update = async (id, { name, price, stock }) => {
  const { rows } = await db.query(
    'UPDATE products SET name = $1, price = $2, stock = $3 WHERE id = $4 RETURNING *',
    [name, price, stock, id]
  );
  return rows[0];
};

const partialUpdate = async (id, dataToUpdate) => {
  const fields = Object.keys(dataToUpdate); 
  const values = Object.values(dataToUpdate); 
  

  const setString = fields.map((field, index) => `${field} = $${index + 1}`).join(', ');

  const queryText = `UPDATE products SET ${setString} WHERE id = $${fields.length + 1} RETURNING *`;
  const queryValues = [...values, id];

  const { rows } = await db.query(queryText, queryValues);
  return rows[0];
};

const deleteById = async (id) => {
  return await db.query('DELETE FROM products WHERE id = $1', [id]);
};

const checkConnection = async () => {
  await db.query('SELECT 1'); // Query mais simples e rápida possível
};

module.exports = {
  findAll,
  findById,
  create,
  update,
  partialUpdate,
  deleteById,
  checkConnection,
};