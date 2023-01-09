const database = require('../models')
const Sequelize = require('sequelize')
const { json } = require('body-parser')

class ItemController {
    static async pegaUmItem(req, res) {
        const { pedidoId, itemId } = req.params
        try {                       
            const umItem = await database.Itens.findOne({
                where: { 
                    id: Number(itemId), // coluna id igual id declarado acima
                    numeroPedido: Number(pedidoId)
                } 
            })
            if (umItem != null ) {
                return res.status(200).json(umItem)
            } else {
                return res.status(400).json(`O pedido de id ${pedidoId} não contém o item de id ${itemId}`)
            }
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaItem(req, res) {
        const { pedidoId } = req.params
        const novoItem = { ...req.body, pedidoId: Number(pedidoId) }
        try {
            const novoItemCriado = await database.Itens.create(novoItem)
            return res.status(200).json(novoItemCriado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaItem(req, res) {
        const novasInfos = req.body
        const { pedidoId, itemId } = req.params
        try {
            await database.Itens.update(novasInfos, { where: { id: Number(itemId) }})
            const ItemAtualizado =  await database.Itens.findOne({ where: { numeroPedido: Number(pedidoId) }})
            return res.status(200).json(ItemAtualizado)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async apagaItem(req, res) {
        const { pedidoId, itemId } = req.params
        try {
            await database.Itens.destroy({ where: { id: Number(itemId) }})
            return res.status(200).json({mensagem:`id ${itemId} deletado`})
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = ItemController