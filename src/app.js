const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser')
const exphbs  = require('express-handlebars');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/health', (req, res) => {
  res.send("All good!");
});

app.use(express.static('public'))

const hbs = exphbs.create({extname: '.hbs', helpers: {
    foo: function () { return 'From FOO!'; },
    bar: function () { return 'From BAR!'; }
  }});
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

app.get('/', function (req, res) {
  res.render('home');
});

app.use('/api', routes);

app.listen(7890, () => console.log("Server started at 7890"));