import refeicaoModels from "../../models/refeicaoModels.js";
import zodErrorFormat from "../../helpers/zodErrorFormat.js"

const create = async (req, res) => {
    try {

      const result = refeicaoModels.validaterefeicaoToCreate(req.body)
  
      if(!result.success){
        return res.status(400).json({
            error: `Dados de Cadastro Inválido`,
            fields: zodErrorFormat(result.error)
        })
      }
     
      const novaRefeicao = await refeicaoModels.create(req.body);
      return res.json({
        sucess: `Refeição ${novaRefeicao.nome} criada com sucesso!`,
        refeicao: novaRefeicao,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error: "Erro no servidor meu cumpadi, roda de novo",
      });
    }
  };
  
  export default create;
  