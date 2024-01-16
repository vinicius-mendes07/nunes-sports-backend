const ProductRepository = require('../repositories/ProductRepository');
const isValidUUID = require('../utils/isValidUUID');

class ProductController {
  async index(req, res) {
    const products = await ProductRepository.findAll();
    res.status(200).json(products);
  }

  async show(req, res) {
    const { id } = req.params;

    if (!isValidUUID(id)) {
      return res.status(400).json({ error: 'Invalid product id' });
    }

    const product = await ProductRepository.findById(id);

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json(product);
  }

  async store(req, res) {
    const { name, description, price } = req.body;

    if (!name) {
      return res.status(400).send({ error: 'Name is required' });
    }

    if (!price) {
      return res.status(400).send({ error: 'Price is required' });
    }

    if (typeof price !== 'number') {
      return res.status(400).send({ error: 'Price is not a number' });
    }

    const product = await ProductRepository.create({
      name,
      description: description || null,
      price,
    });

    res.status(201).json(product);
  }

  async update(req, res) {
    const { id } = req.params;
    const { name, description, price } = req.body;

    if (!isValidUUID(id)) {
      return res.status(400).json({ error: 'Invalid product id' });
    }

    if (!name) {
      return res.status(400).json({ error: 'Name is required' });
    }

    if (!price) {
      return res.status(400).json({ error: 'Price is required' });
    }

    if (typeof price !== 'number') {
      return res.status(400).json({ error: 'Price is not a number' });
    }

    const productExists = await ProductRepository.findById(id);

    if (!productExists) {
      return res.status(404).json({ error: 'Product not found' });
    }

    const product = await ProductRepository.update(id, {
      name,
      description: description || null,
      price,
    });

    res.json(product);
  }

  async delete(req, res) {
    const { id } = req.params;

    if (!isValidUUID(id)) {
      return res.status(400).json({ error: 'Invalid product id' });
    }

    await ProductRepository.delete(id);
    res.sendStatus(204);
  }
}

module.exports = new ProductController();
