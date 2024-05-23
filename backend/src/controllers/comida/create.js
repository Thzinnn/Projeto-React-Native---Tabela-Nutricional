import comidaModels from "../../models/comidaModels.js";

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
   
    const result = await comidaModels.create(req.body);
    return res.json({
      sucess: `Comida ${result.nome} criada com sucesso!`,
      comida: result,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Erro no servidor meu cumpadi, roda de novo",
    });
  }
};

export default create;
