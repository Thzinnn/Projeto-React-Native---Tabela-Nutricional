import comidaModels from "../../models/comidaModels.js";

const listAll = async (req, res) => {
    try {
        const result = await comidaModels.getAll()
        return res.json({
            sucess: `Comidas listadas com sucesso!`,
            comidas: result
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Erro no servidor meu cumpadi, roda de novo'
        })
    }
}

export default listAll