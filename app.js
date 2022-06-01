const path = require("path");
const express = require("express");



const app = express();


const PORT = 3000;
app.listen(PORT, () => {

    console.log("Estamos corriendo en el puerto "+ PORT);

}); 

app.use(express.static(path.join(__dirname, "public")));

//
const mainRoutes = require("./routes/main.js")

app.set("view engine", "ejs");

app.use("/", mainRoutes);


/*
//camino path ruta
app.get("/", (req, res) => {

    //funcion controladora o handler
    res.sendFile(path.join(__dirname, "views/index.html"));

});



app.get("/login", (req, res)  => {
    res.sendFile(path.join(__dirname, "views/login.html"));
});

app.get("/index2", (req, res)  => {
    res.sendFile(path.join(__dirname, "views/index2.html"));
});

app.get("/register", (req, res)  => {
    res.sendFile(path.join(__dirname, "views/register.html"));
});


app.get("/productDetail", (req, res)  => {
    res.sendFile(path.join(__dirname, "views/productDetail.html"));
});


app.get("/productCart", (req, res)  => {
    res.sendFile(path.join(__dirname, "views/productCart.html"));
});


app.get("/login2", (req, res)  => {
    res.sendFile(path.join(__dirname, "views/login2.html"));
});

*/

