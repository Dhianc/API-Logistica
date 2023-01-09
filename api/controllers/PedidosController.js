const database = require('../models')
const Sequelize = require('sequelize')
const { json } = require('body-parser')

class PedidoController {
    static async pegaTodosOsPedidos(req, res){
        try{
            const todosOsPedidos = await database.Pedidos.findAll()
            return res.status(200).json(todosOsPedidos)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmPedido(req, res) {
        const { id } = req.params
        try {                       
            const umPedido = await database.Pedidos.findOne({
                where: { 
                    id: Number(id) // coluna id igual id declarado acima
                } 
            })
            if (umPedido != null ) {
                return res.status(200).json(umPedido)
            } else {
                return res.status(400).json(`O pedido de id ${id} não existe`)
            }
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaPedido(req, res) {
        const novoPedido = req.body
        try {
            const novoPedidoCriado = await database.Pedidos.create(novoPedido)
            return res.status(200).json(novoPedidoCriado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaPedido(req, res) {
        const novasInfos = req.body
        const { id } = req.params
        try {
            await database.Pedidos.update(novasInfos, { where: { id: Number(id) }})
            const PedidoAtualizado =  await database.Pedidos.findOne({ where: { id: Number(id) }})
            return res.status(200).json(PedidoAtualizado)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async apagaPedido(req, res) {
        const { id } = req.params
        try {
            await database.Pedidos.destroy({ where: { id: Number(id) }})
            return res.status(200).json({mensagem:`id ${id} deletado`})
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = PedidoController