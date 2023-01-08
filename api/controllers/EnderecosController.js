const database = require('../models')
const Sequelize = require('sequelize')

class EnderecoController {
    static async pegaTodosOsEnderecos(req, res){
        try{
            const todosOsEnderecos = await database.Endereco.findAll()
            return res.status(200).json(todosOsEnderecos)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmEndereco(req, res) {
        const { id } = req.params
        try {                       
            const umEndereco = await database.Endereco.findOne({
                where: { 
                    id: Number(id) // coluna id igual id declarado acima
                } 
            })
            return res.status(200).json(umEndereco)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaEndereco(req, res) {
        const novoEndereco = req.body
        try {
            const novoEnderecoCriado = await database.Endereco.create(novoEndereco)
            return res.status(200).json(novoEnderecoCriado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaEndereco(req, res) {
        const novasInfos = req.body
        const { id } = req.params
        try {
            await database.Endereco.update(novasInfos, { where: { id: Number(id) }})
            const EnderecoAtualizado =  await database.Endereco.findOne({ where: { id: Number(id) }})
            return res.status(200).json(EnderecoAtualizado)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async apagaEndereco(req, res) {
        const { id } = req.params
        try {
            await database.Endereco.destroy({ where: { id: Number(id) }})
            return res.status(200).json({mensagem:`id ${id} deletado`})
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = EnderecoController