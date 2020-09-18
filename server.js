const express =  require("express");
const cors = require("cors");
const mongoose = require("mongoose");
// const requireDir = require("require-dir");

const routes = require("./src/routes");

//Iniciando o DB
mongoose.connect("mongodb://localhost:27017/nodeapi", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//executar a funcao, iniciando o app
const app = express();

//permitir enviar dados em json
app.use(express.json());
app.use(cors());

app.use("/api", routes);

app.listen(3001, () => {
  console.log("🚀 Server started on port 3001!")
});
