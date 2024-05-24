import { PrismaClient } from '@prisma/client'
import { z } from "zod"

const prisma = new PrismaClient()

const comidaSchema = z.object({
    id: z.number({
        required_error: "ID é obrigatório",
        invalid_type_error: "O ID deve ser um número inteiro"
    }),
    nome: z.string({
        required_error: "Nome é obrigatório",
        invalid_type_error: "O nome deve ser uma string.",
    })
    .min(2, {message: 'O nome deve ter no mínimo 2 letras'})
    .max(100, {message: 'O nome deve ter no máximo 100 caracteres.'}),
    calorias: z.string({
        required_error: "Calorias é obrigatório",
        invalid_type_error: "As calorias deve ser um número"
    }),
    gorduras_saturadas: z.string({
        required_error: "Gorduras saturadas é obrigatório.",
        invalid_type_error: "As gorduras saturadas deve ser um número.",
      }),
    gorduras_trans: z.string({
      required_error: "Gorduras trans é obrigatório.",
      invalid_type_error: "As gorduras trans deve ser um número.",
    }),
    carboidratos: z.string({
      required_error: "Carboidratos é obrigatório.",
      invalid_type_error: "Os Carboidratos deve ser um número.",
    }),
    proteinas: z.string({
      required_error: "Proteinas é obrigatório.",
      invalid_type_error: "As proteinas deve ser um número.",
    }),
    sodio: z.string({
      required_error: "Sódio é obrigatório.",
      invalid_type_error: "O sódio deve ser um número.",
    }),
    
})

const validateComidaToCreate = (comida) => {
    const partialcomidaSchema = comidaSchema.partial({id: true})
    return partialcomidaSchema.safeParse(comida)
}

const validateComidaToUpdate = (comida) => {
    const partialcomidaSchema = comidaSchema.partial({id: true})
    return partialcomidaSchema.safeParse(comida)
}

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

const remove = async (id) => {
    return await prisma.comida.delete({
        where: {
            id
        },
    })
}

export default {getAll, getById, create, edit, remove, validateComidaToCreate, validateComidaToUpdate}