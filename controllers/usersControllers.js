const { path } = require("express/lib/application");
const lugares = require("../destinos");

module.exports = {
  login: (req, res) => {
    res.render("users/login");
  },
  login: (req, res) => {
    res.render("users/login");
  },
  formulario: (req, res) => {
    res.render("users/formulario", {
      destinos: lugares.destinos,
      continentes: lugares.continentes,
    });
  },
};
