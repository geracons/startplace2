const { path } = require("express/lib/application");

module.exports = {


  productCart: (req, res) => {
    res.render("productcart");
  },
  productDetail: (req, res) => {
    res.render("productdetail");
  },
};
