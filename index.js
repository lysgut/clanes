const express = require("express")
const app = express()
const morgan = require("morgan")
const bodyParser = ("body-parser")
const mongoose = ("mongoose")
const urlMongoose = "mongodb+srv://lysgut:Mongoatlas177@cluster0.etd9y4p.mongodb.net/${dbname}?retryWrites=true&w=majority"
const port = 1905
const ejs = require(ejs)

app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const mongoose = require('mongoose');
mongoose.Promise = global.Promise; // Utilizar promesas nativas de Node.js

const db = mongoose.connection;
mongoose.connect('mongodb+srv://lysgut:Mongoatlas177@cluster0.h8ukq9w.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true })
  .then(() => console.log('Conexión exitosa a la base de datos'))
  .catch((err) => console.error(err));

app.listen(port, () => {
    console.log("Servidor iniciado en el puerto " + port);
});