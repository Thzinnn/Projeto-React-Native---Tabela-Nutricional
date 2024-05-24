import comidaModels from "../../models/comidaModels.js";
import zodErrorFormat from "../../helpers/zodErrorFormat.js"

const create = async (req, res) => {
  try {
    // for (const key in req.body) {
    //   const element = req.body[key];

    //   req.body[key] = parseFloat(element.replace(",", "."));
    // }
    for (const key in req.body) {
      const element = req.body[key];

      if (["nome"].includes(key)) continue;

      req.body[key] = element.replace(",", ".");
    }

    console.log(req.body);

    const result = comidaModels.validateComidaToCreate(req.body)

    if(!result.success){
      return res.status(400).json({
          error: `Dados de Cadastro Inválido`,
          fields: zodErrorFormat(result.error)
      })
    }
   
    const novaComida = await comidaModels.create(req.body);
    return res.json({
      sucess: `Comida ${novaComida.nome} criada com sucesso!`,
      comida: novaComida,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Erro no servidor meu cumpadi, roda de novo",
    });
  }
};

export default create;
