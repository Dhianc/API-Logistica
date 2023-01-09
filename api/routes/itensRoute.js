const { Router } = require('express')
const ItemController = require('../controllers/ItensController')

const router = Router()

router
    .get('/pedidos/:pedidoId/item/:itemId', ItemController.pegaUmItem)
    .post('/pedidos/:pedidoId/item', ItemController.criaItem)
    .put('/pedidos/:pedidoId/item/:itemId', ItemController.atualizaItem)
    .delete('/pedidos/:pedidoId/item/:itemId', ItemController.apagaItem)

module.exports = router