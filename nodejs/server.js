const express = require('express')
// import express from 'express';

const app = express();
app.set("view engine", "ejs")  //a ferramenta usada para renderizar html será o ejs

app.get("/", function(req, res) {       //criação de rota 
    res.render("pages/index");                //res: resposta: renderizar o index.ejs
})
app.get("/sobre", function(req, res) {       //criação de rota 
    res.render("pages/about");
})

app.listen(8080);   //ouvidor de porta, ouvir a porta 8080
console.log('rodando')