import refeicaoModels from "../../models/refeicaoModels.js";

const listAll = async (req, res) => {
    try {
        const result = await refeicaoModels.getAll()
        return res.json({
            sucess: `Refeições listadas com sucesso!`,
            refeicoes: result
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Erro no servidor meu cumpadi, roda de novo'
        })
    }
}

export default listAll