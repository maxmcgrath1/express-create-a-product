const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

// middleware
app.use(express.urlencoded({ extended: false }));

// db
const products = require('./products');

// product index route
app.get("/", function(req, res) {
  res.send("This is working!!!!!!!!!!!")
});

app.get('/products', (req, res) => {
  const context = {products: products};
  res.render('index.ejs', context);
});

app.get("/products/new", function(req, res) {
  res.render("create.ejs")
});

// product show route
app.get('/products/:id', (req, res) => {
  res.send(products[req.params.id]);
});

// product create route
app.post('/products', (req, res) => {
  console.log('CREATE route accessed');
  console.log('Data within req.body: ', req.body);
  products.push(req.body);
  res.redirect('/products');
});


app.listen(PORT, () => {
  console.log("App is running on port: ", PORT);
});


