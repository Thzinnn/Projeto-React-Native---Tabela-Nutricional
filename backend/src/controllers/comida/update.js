import comidaModels from "../../models/comidaModels.js";

const edit = async (req, res) => {
    try {
        const id = +req.params.id
        const comida = req.body
        const result = await comidaModels.edit({id, ...comida})
        return res.json({
            sucess: `Comidas ${result.nome} listadas com sucesso!`,
            comida: result
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Erro no servidor meu cumpadi, roda de novo'
        })
    }
}

export default edit