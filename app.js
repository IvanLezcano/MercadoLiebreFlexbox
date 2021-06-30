const { static } = require("express");
const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const views = path.join(__dirname,"views")
console.log(__dirname);
app.use(express.static('public'));


app.get("/",(req,res) => res.sendFile(path.join(views,"home.html")))
app.get("/login",(req,res) => res.sendFile(path.join(views,"login.html")))





app.listen(port,() => console.log("El servidor corriendo en el puerto"+ port))

//npx nodemon app.js para ejecutarlo