const { Router } = require('express')
const PedidoController = require('../controllers/PedidosController')

const router = Router()

router
    .get('/pedidos', PedidoController.pegaTodosOsPedidos)
    .get('/pedidos/:id', PedidoController.pegaUmPedido)
    .post('/pedidos', PedidoController.criaPedido)
    .put('/pedidos/:id', PedidoController.atualizaPedido)
    .delete('/pedidos/:id', PedidoController.apagaPedido)

    .get('/pedidos/:pedidoId/item/:itemId', PedidoController.pegaUmItem)

module.exports = router