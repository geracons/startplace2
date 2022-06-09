const { path } = require("express/lib/application");
const db = require('../data/db');
const allproducts = db.getAll();

// console.log(allproduct);
const controller = {
    // Root - Show all products
    productDetail: (req, res) => {
      res.render("./product/productdetail", {
        allproducts: allproducts
        });
    },
    
};

module.exports = controller;