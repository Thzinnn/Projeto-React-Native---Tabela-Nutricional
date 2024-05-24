import refeicaoModels from "../../models/refeicaoModels.js";

const getById = async (req, res) => {
    try {
        const id = req.params.id

        const result = await refeicaoModels.getById(+id)
        return res.json({
            sucess: `Refeição ${id} encontrada com sucesso!`,
            result
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Erro no servidor meu cumpadi, roda de novo'
        })
    }
}

export default getById