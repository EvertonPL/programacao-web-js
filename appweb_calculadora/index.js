// carrega framework express
const express = require('express');
// cria um app usando a função express()
const calculadora = require('./calculadora');
const app     = express();
const PORT = 8080;
const LOG = [];

app.get('/ola/joao', (req, res)=>{
    res.send('<h1>Olá, joão!</h1> <p>Estou na web...</p>');
});

app.get('/calculadora/somar/:a/:b', (req, res)=>{
    let a = Number(req.params.a);
    let b = Number(req.params.b);
    let resultado = calculadora.somar(a, b);
    let string_resultado = `<h1>${a} + ${b} = ${resultado}</h1>`;
    res.send(string_resultado);
    LOG.push(string_resultado)
    res.send(string_resultado);
});

app.get('/calculadora/log', (req, res)=>{
    resultado = "";
    LOG.forEach(log => {
        resultado += log;
    });
    res.send(resultado);
});




app.listen(PORT, ()=>{
    console.log('app rodando na porta ' + PORT);
});