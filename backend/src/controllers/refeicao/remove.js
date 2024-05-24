import refeicaoModels from "../../models/refeicaoModels.js"

const remove = async (req, res) => {
    try{
        const id = +req.params.id
        const refeicao = req.body

        const result = await refeicaoModels.remove(+id)
        res.json({
            success: `Refeição ${refeicao.nome} apagado com sucesso!`,
            refeicao: result
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Erro no servidor meu cumpadi, roda de novo'
        })
    }
}

export default remove