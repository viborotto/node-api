const Product = require("../models/Product");

//exportar objeto com umas funcoes
module.exports = {
  //listagem de todos os registro de produtos, async await
  async index(req, res) {
    const { page = 1 } = req.query;
    const products = await Product.paginate({}, { page, limit: 10 });

    return res.json(products);
  },

  async show(req, res){
    const product = await Product.findById(req.params.id);

    return res.json(products);
  },

  async store(req, res) {
    const product = await Product.create(req.body);

    return res.json(product);
  },

  async update(req, res){
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });

    return res.json(product);
  },

  async destroy(){
    await Product.findByIdAndRemove(req.params.id);

    return res.send();
  }
};