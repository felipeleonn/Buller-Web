const path = require('path');

const express = require('express');
const app = express();
const mainRouter = require ('./routes/mainRouter')

app.use(express.static('public'))

// EJS
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.listen (3000, () => {
  console.log('Servidor correindo en el puerto 3000')
})

app.use(mainRouter);