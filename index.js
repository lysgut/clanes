/* const morgan = require("morgan")
const bodyParser =require("body-parser")
const ejs = require("ejs")
app.set("view engine", "ejs")
app.get('/', (req, res) => {
  res.send('Hello World!')
})
*/

const express = require("express")
const app = express()
const port = 1905
app.listen(port, () => {
  console.log("Servidor iniciado en el puerto " + port);
});

const mongoose = require("mongoose")
const urlMongoose = `mongodb+srv://lysgut:Mongoatlas177@cluster0.yvzut0t.mongodb.net/?retryWrites=true&w=majority`
mongoose.Promise = global.Promise; // Utilizar promesas nativas de Node.js
mongoose.connect(urlMongoose, { useNewUrlParser: true })
  .then(() => console.log('Conexión exitosa a la base de datos'))
  .catch((err) => console.error(err));
