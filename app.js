const express = require("express");

const path = require("path");

const app = express();

const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
    console.log("Probando el servidor en el puerto : PORT")
})

app.get("/",(req, res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"));
});

app.get("/register",(req, res) => {
    res.sendFile(path.join(__dirname, "/views/register.html"));
});

app.get("/login",(req, res) => {
    res.sendFile(path.join(__dirname, "/views/login.html"));
});