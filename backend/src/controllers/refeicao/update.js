import refeicaoModels from "../../models/refeicaoModels.js";
import zodErrorFormat from "../../helpers/zodErrorFormat.js"

const edit = async (req, res) => {
    try {
        const id = +req.params.id
        const refeicao = req.body

        const result = refeicaoModels.validaterRefeicaoToUpdate(refeicao)
        if(!result.success){
            return res.status(400).json({
                error: `Dados de Atualização Inválido`,
                fields: zodErrorFormat(result.error)
            })
        }

        const refeicaoEditada = await refeicaoModels.edit({id, ...refeicao})
        return res.json({
            sucess: `Refeição ${refeicaoEditada.nome} editada com sucesso!`,
            refeicao: refeicaoEditada
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Erro no servidor meu cumpadi, roda de novo'
        })
    }
}

export default edit