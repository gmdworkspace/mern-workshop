const express = require('express');
const routes = require('./routes');
const app = express();

app.get('/health', (req, res) => {
  res.send("All good!");
});

app.use('/api', routes);

app.listen(7890, () => console.log("Server started at 7890"));