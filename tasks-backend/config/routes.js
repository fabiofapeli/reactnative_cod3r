module.exports = app => {
  //módulos carregados pelo cosign em app, acessa todas as funções de uma forma mais fácil
  app.post("/signup", app.api.user.save);
  app.post("/signin", app.api.auth.signin);

  app
    .route("/tasks")
    .all(app.config.passport.authenticate())
    .get(app.api.task.getTasks)
    .post(app.api.task.save);

  app
    .route("/tasks/:id")
    .all(app.config.passport.authenticate())
    .delete(app.api.task.remove);

  app
    .route("/tasks/:id/toggle")
    .all(app.config.passport.authenticate())
    .put(app.api.task.toggleTask);
};
