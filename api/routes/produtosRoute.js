const { Router } = require('express')
const ProdutoController = require('../controllers/ProdutoController')

const router = Router()

router
    .get('/produtos', ProdutoController.pegaTodosOsProdutos)
    .get('/produtos/:id', ProdutoController.pegaUmProduto)
    .post('/produtos', ProdutoController.criaProduto)
    .put('/produtos/:id', ProdutoController.atualizaProduto)
    .delete('/produtos/:id', ProdutoController.apagaProduto)

module.exports = router