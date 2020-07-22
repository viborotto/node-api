const express =  require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');


//executar a funcao, iniciando o app
const app = express();

//permitir enviar dados em json
app.use(express.json);
app.use(cors());

//Iniciando o DB
mongoose.connect('mongodb://localhost:27017/{nodeapi', { useNewUrlParser: true , useUnifiedTopology: true});
requireDir('./src/models');

app.use('/api', require("./src/routes"));

app.listen(3001);
