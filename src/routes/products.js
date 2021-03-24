const productsRouter = require('express').Router();

const products = [{
  id: 1,
  name: "Samsung galaxy s20",
  price: 60000,
  sold: false
}, {
  id: 2,
  name: "iPhone 12 Pro",
  price: 110000,
  sold: false
}, {
  id: 3,
  name: "iPad Pro",
  price: 71900,
  sold: false
}, {
  id: 4,
  name: "Apple Watch",
  price: 39999,
  sold: false
}, {
  id: 5,
  name: "Airpods Pro",
  price: 24999,
  sold: false
}]

productsRouter.get('/', (req, res) => {
  return res.status(200).json(products);
});

productsRouter.post('/', (req, res) => {
  products.push(req.body);
  return res.status(200).json(products);
});

productsRouter.put('/:productId', (req, res) => {
  const productId = req.params.productId;
  products.map((product) => {
    if(product.id === parseInt(productId)) {
      product.sold = true;
    }
    return product;
  });
  return res.status(200).json(products);
});

productsRouter.delete('/:productId', (req, res) => {
  const productId = req.params.productId;
  products.forEach((product,  i) => {
    if(product.id === parseInt(productId)) {
      products.splice(i,1);
    }
  })
  return res.status(200).json(products);
});

module.exports = productsRouter;