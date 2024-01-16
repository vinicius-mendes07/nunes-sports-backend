const db = require('../../database');

class ProductRepository {
  async findAll() {
    const rows = db.query('SELECT * FROM products');

    return rows;
  }

  async findById(id) {
    const [row] = await db.query(`
      SELECT * FROM products
      WHERE id = $1
    `, [id]);

    return row;
  }

  async create({ name, description, price }) {
    const [row] = await db.query(`
      INSERT INTO products(name, description, price)
      VALUES($1, $2, $3)
      RETURNING *
    `, [name, description, price]);

    return row;
  }

  async update(id, { name, description, price }) {
    const [row] = await db.query(`
      UPDATE products
      SET name = $2, description = $3, price = $4
      WHERE id = $1
      RETURNING *
    `, [id, name, description, price]);

    return row;
  }

  async delete(id) {
    const deleteOp = await db.query('DELETE FROM products WHERE id = $1', [id]);
    return deleteOp;
  }
}

module.exports = new ProductRepository();
