const { path } = require("express/lib/application");


module.exports = {
  home: (req, res) => {
    res.render("index");
  },
 
};
