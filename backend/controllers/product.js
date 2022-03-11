const Product = require('../models/Product');

exports.createProduct = (req, res, next) => {
  const productObject = JSON.parse(req.body.product);
  delete productObject._id;
  const product = new Product({
    ...productObject,
  });
  product.save()
    .then(() => res.status(201).json({ message: 'Object save !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.modifyProduct = (req, res, next) => {
  const productObject = JSON.parse(req.body.product);
  Product.updateOne({ _id: req.params.id }, { ...productObject, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Object mpdify !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.deleteProduct = (req, res, next) => {
  Product.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Object deleted !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.getOneProduct = (req, res, next) => {
  Product.findOne({ _id: req.params.id })
    .then( product => res.status(200).json(product))
    .catch(error => res.status(400).json({error}));
};

exports.getAllProducts = (req, res, next) => {
  Product.find()
    .then(products => res.status(200).json(products))
    .catch(error => res.status(400).json({error}));
};