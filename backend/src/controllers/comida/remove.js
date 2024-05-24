import comidaModels from "../../models/comidaModels.js"

const remove = async (req, res) => {
    try{
        const id = +req.params.id
        const comida = req.body

        const result = await comidaModels.remove(+id)
        res.json({
            success: `Comida ${comida.nome} apagado com sucesso!`,
            comida: result
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Erro no servidor meu cumpadi, roda de novo'
        })
    }
}

export default remove