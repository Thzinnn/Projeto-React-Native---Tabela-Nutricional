import { PrismaClient } from '@prisma/client'
import { z } from "zod"

const prisma = new PrismaClient()

const userSchema = z.object({
    id: z.number({
        required_error: "ID é obrigatório",
        invalid_type_error: "O ID deve ser um número inteiro"
    }),
    name: z.string({
        required_error: "Nome é obrigatório",
        invalid_type_error: "O nome deve ser uma string.",
    })
    .min(2, {message: 'O nome deve ter no mínimo 2 letras'})
    .max(100, {message: 'O nome deve ter no máximo 100 caracteres.'}),
    calorias: z.number({
        required_error: "Calorias é obrigatório",
        invalid_type_error: "As calorias deve ser um número"
    }),
    gorduras_saturadas: z.number({
        required_error: "Gorduras saturadas é obrigatório.",
        invalid_type_error: "As gorduras saturadas deve ser um número.",
      }),
    gorduras_trans: z.number({
      required_error: "Gorduras trans é obrigatório.",
      invalid_type_error: "As gorduras trans deve ser um número.",
    }),
    carboidratos: z.number({
      required_error: "Carboidratos é obrigatório.",
      invalid_type_error: "Os Carboidratos deve ser um número.",
    }),
    proteinas: z.number({
      required_error: "Proteinas é obrigatório.",
      invalid_type_error: "As proteinas deve ser um número.",
    }),
    sodio: z.number({
      required_error: "Sódio é obrigatório.",
      invalid_type_error: "O sódio deve ser um número.",
    }),
    
})

const getAll = async () => {
    return await prisma.comida.findMany({
        orderBy: { nome : 'asc'}
    })
}

const getById = async (id) => {
    return await prisma.comida.findUnique({
        where: {
            id
        }
    })
}

const create = async (comida) => {
    return await prisma.comida.create({
        data: comida
    })
}

const edit = async (comida) => {
    return await prisma.comida.update({
        where: {
            id: comida.id
        },
        data: comida
    })
}

export default {getAll, getById, create, edit}