const lugares = require("../destinos");

module.exports = {
  home: (req, res) => {
    res.render("index");
  },
  login: (req, res) => {
    res.render("login");
  },
  login: (req, res) => {
    res.render("login");
  },
  productCart: (req, res) => {
    res.render("productcart");
  },
  productDetail: (req, res) => {
    res.render("productdetail");
  },
  formulario: (req, res) => {
    res.render("formulario", {
      destinos: lugares.destinos,
      continentes: lugares.continentes,
    });
  },
};
