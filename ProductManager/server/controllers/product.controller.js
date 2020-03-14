module.exports.createProduct = (req, res) => {
    const { title, price, description } = req.body
    Product.create({
        title,
        price,
        description
    })
        .then (createProduct => res.json({product: createProduct}))
        .catch(err => res.json(err))
}

module.exports.findOneProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
    .then(oneProduct => res.json({ product: oneProduct}))
    .catch(err => res.json({ message: "Something went wrong", error: err}))
};

const { Product } = require('../models/product.model')
module.exports.findAllProducts = (req, res) => {
    Product.find()
    .then(allProducts => res.json({ products: allProducts}))
    .catch(err => res.json({ message: "Something went wrong", error: err}))
};

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.id}, req.body, { new: true})
    .then(updateProduct => res.json({ product: updateProduct}))
    .catch(err => res.json({ message: "Something went wrong", error: err}))
};

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
    .then(result => res.json({ product: result}))
    .catch(err => res.json({ message: "Something went wrong", error: err}))
};
