const express = require("express");
const app = express();
const db = require("./config/db");
const consign = require("consign");

/*
cosign carrega os arquivos e compartilha as informações do app entre eles
Sempre que o consign for carregar um módulo ele passará o app como parâmetro
*/

consign() //carrega todos os dados dos módulos dentro de app
  .include("./config/passport.js")
  .then("./config/middlewares.js")
  .then("./api") //todos os arquivos da pasta api
  .then("./config/routes.js")
  .into(app);

app.db = db;

app.get("/", (req, res) => {
  res.status(200).send("Meu Backend");
});

app.listen(3000, () => {
  console.log("Backend ok...");
});
