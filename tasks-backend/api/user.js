const bcrypt = require("bcrypt-nodejs");

module.exports = app => {
  const obterHash = (password, callback) => {
    //Gerará um hash diferente para cada requisição
    /*
     ao logar o sistema gera um hash diferente do que esta no bd,
     porém consegue saber que os hashs foram originados da mesma senha
    */
    //impossível retornar a senha que deu origem ao hash
    bcrypt.genSalt(10, (err, salt) => {
      //genSalt (tempero) número de rodadas para processar o dado
      bcrypt.hash(password, salt, null, (err, hash) => callback(hash));
    });
  };

  //função tipo middleware
  const save = (req, res) => {
    obterHash(req.body.password, hash => {
      const password = hash;
      app
        .db("users")
        .insert({ name: req.body.name, email: req.body.email, password })
        .then(_ => req.status(204).send()) //status 204 - Sucesso sem dado retornado
        .catch(err => res.status(400).json(err)); //retorna menssagem de erro
    });
  };

  //com esse retorno é possível acessar a função apartir de uma url
  return { save };
};
