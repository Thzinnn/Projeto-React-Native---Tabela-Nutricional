import comidaModels from "../../models/comidaModels.js";
import zodErrorFormat from "../../helpers/zodErrorFormat.js"

const edit = async (req, res) => {
    try {
        const id = +req.params.id
        const comida = req.body

        const result = comidaModels.validateComidaToUpdate(comida)
        if(!result.success){
            return res.status(400).json({
                error: `Dados de Atualização Inválido`,
                fields: zodErrorFormat(result.error)
            })
        }

        const ComidaEditada = await comidaModels.edit({id, ...comida})
        return res.json({
            sucess: `Comidas ${ComidaEditada.nome} listadas com sucesso!`,
            comida: ComidaEditada
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Erro no servidor meu cumpadi, roda de novo'
        })
    }
}

export default edit