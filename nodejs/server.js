const express = require('express')
// import express from 'express';

const app = express();          //instanciação do express
app.set("view engine", "ejs")  //a ferramenta usada para renderizar html será o ejs; o set é um método do express, que está dentro de app

app.get("/", function(req, res) {       //criação de rota 
    const items = [
        {title: 'D', message: 'esenvolver aplicações facilmente'},
        {title: 'E', message: 'JS usa JavaScript para renderizar HTML'},
        {title: 'M', message: 'uito fácil de usar'},
        {title: 'A', message: 'morzinho'},
        {title: 'I', message: 'nstall ejs'},
        {title: 'S', message: 'intaxe simples'}
    ];

    const subtitle = "Uma linguagem de modelagem para criação de páginas HTML utilizando JavaScript."

    res.render("pages/index", { //renderizar também o objeto que tem como conteúdo o array de cima
        qualities: items,
        subtitle: subtitle,
    });                //res: resposta: renderizar o index.ejs
})
app.get("/sobre", function(req, res) {       //criação de rota 
    res.render("pages/about");
})

app.listen(8080);   //ouvidor de porta, ouvir a porta 8080
console.log('rodando')