const productsRouter = require('express').Router();

productsRouter.get('/', (req, res) => {
  res.send("All good!");
});

productsRouter.post('/:productId', (req, res) => {
  res.send("All good on POST!");
});

productsRouter.put('/:productId', (req, res) => {
  res.send("All good on PUT!");
});

productsRouter.delete('/:productId', (req, res) => {
  res.send("All good on DELETE!");
});

module.exports = productsRouter;