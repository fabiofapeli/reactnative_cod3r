module.exports = app => {
  //módulos carregados pelo cosign em app, acessa todas as funções de uma forma mais fácil
  app.post("/signup", app.api.user.save);
  app.post("/signin", app.api.auth.signin);
};
