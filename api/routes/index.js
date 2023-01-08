const bodyParser = require('body-parser')
const clientes = require('./clientesRoute')
const endereco = require('./enderecosRoute')
const produtos = require('./produtosRoute')
const pedidos = require('./pedidosRoute')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(clientes)
    app.use(endereco)
    app.use(pedidos)
    app.use(produtos)

    // app.get('/', (req, res) => res.send('Olá!'))
}