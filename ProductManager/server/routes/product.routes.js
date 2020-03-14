const ProductController = require('../controllers/product.controller');

module.exports = function(app){
    app.post('/api/products/new', ProductController.createProduct)
    app.get('/api/products', ProductController.findAllProducts)
    app.get('/api/products/:id', ProductController.findOneProduct);
    app.put('/api/products/edit/:id', ProductController.updateProduct); 
    app.delete('/api/products/delete/:id', ProductController.deleteProduct)
}