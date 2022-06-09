const { path } = require("express/lib/application");
const db = require('../data/db');
const allproducts = db.getAll();
const lugares = require("../destinos");


module.exports = {
  home: (req, res) => {
    res.render("index");
  },
  detalleTour: (req, res) => {
    const tourBuscado = allproducts.find((tour) => {
      return tour.id == req.params.id;
    });
    if (tourBuscado) {
      res.render("product/productdetail", {
        tour: tourBuscado,
      });
    } else {
      res.render("not-found");
    }
  },
  login: (req, res) => {
    res.render("./users/login");
  },
  formulario: (req, res) => {
    res.render("./users/formulario", {
      destinos: lugares.destinos,
      continentes: lugares.continentes,
    });
  },
 
};
