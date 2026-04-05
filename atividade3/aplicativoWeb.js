const express = require('express');
const estoque = require('./estoque'); // Importa nossa lógica de estoque
const app = express();
const PORT = 8080;

// Rota: Adicionar produto
app.get('/adicionar/:id/:nome/:qtd', (req, res) => {
    const { id, nome, qtd } = req.params;
    estoque.adicionar(id, nome, qtd);
    res.send(`Produto ${nome} adicionado com sucesso!`);
});

// Rota: Listar produtos
app.get('/listar', (req, res) => {
    const produtos = estoque.listar();
    res.json(produtos);
});

// Rota: Remover produto
app.get('/remover/:id', (req, res) => {
    const { id } = req.params;
    estoque.remover(id);
    res.send(`Produto com ID ${id} removido.`);
});

// Rota: Editar quantidade
app.get('/editar/:id/:qtd', (req, res) => {
    const { id, qtd } = req.params;
    estoque.editar(id, qtd);
    res.send(`Quantidade do produto ${id} atualizada para ${qtd}.`);
});

app.listen(PORT, () => {
    console.log(`API de estoque rodando em http://localhost:${PORT}`);
});
