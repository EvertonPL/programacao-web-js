let produtos = [];

function adicionar(id, nome, qtd) {
    produtos.push({ id, nome, qtd: Number(qtd) });
}

function listar() {
    return produtos;
}

function remover(id) {
    produtos = produtos.filter(p => p.id !== id);
}

function editar(id, novaQtd) {
    let produto = produtos.find(p => p.id === id);
    if (produto) {
        produto.qtd = Number(novaQtd);
    }
}

module.exports = {
     adicionar, 
     listar, 
     remover, 
     editar 
};