const express = require('express');
const mongoose = require('mongoose');

const productRoutes = require('./routes/product');
const userRoutes = require('./routes/user');

mongoose.connect('mongodb+srv://admin:MVM75zX81NZJNJmf@clusterfree.onhaoec.mongodb.net/crud',
{ useNewUrlParser: true,
    useUnifiedTopology: true }
  )
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));
  
const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(express.json());

app.use('/api/product', productRoutes);
app.use('/api/user', userRoutes);

module.exports = app;