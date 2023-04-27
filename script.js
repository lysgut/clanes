
const express = require('express')
const app = express()
const port = 3002

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const mongoose = require('mongoose');
mongoose.Promise = global.Promise; // Utilizar promesas nativas de Node.js

const db = mongoose.connection;
mongoose.connect('mongodb+srv://lysgut:lysgut@Cluster0.Mongoatlas177.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true })
  .then(() => console.log('Conexión exitosa a la base de datos'))
  .catch((err) => console.error(err));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


