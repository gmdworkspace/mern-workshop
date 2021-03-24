const express = require('express');
const routes = require('./routes');
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/health', (req, res) => {
  res.send("All good!");
});

app.use(express.static('public'))

app.use('/api', routes);

app.listen(7890, () => console.log("Server started at 7890"));