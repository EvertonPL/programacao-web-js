// carrega framework express
const express = require('express');
// cria um app usando a função express()
const app     = express();
const PORT = 8080;

app.get('/', (req, res)=>{
    res.send('<h1>Olá, mundo!</h1> <p>Estou na web...</p>');
});

app.get('/bem-vindo', (req, res)=>{
    res.send('<h1>Bem-vindo ao desenvolvimento WEB!<\H1>');
});




app.listen(PORT, ()=>{
    console.log('app rodando na porta ' + PORT);
});