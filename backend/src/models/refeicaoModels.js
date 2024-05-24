import { PrismaClient } from '@prisma/client'
import { z } from "zod"

const prisma = new PrismaClient()

const refeicaoSchema = z.object({
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
})

const validateRefeicaoToCreate = (refeicao) => {
    const partialrefeicaoSchema = refeicaoSchema.partial({id: true})
    return partialrefeicaoSchema.safeParse(refeicao)
}

const validaterRefeicaoToUpdate = (refeicao) => {
    const partialrefeicaoSchema = refeicaoSchema.partial({id: true})
    return partialrefeicaoSchema.safeParse(refeicao)
}

const getAll = async () => {
    return await prisma.refeicao.findMany({
        orderBy: { nome : 'asc'}
    })
}

const getById = async (id) => {
    return await prisma.refeicao.findUnique({
        where: {
            id
        }
    })
}

const create = async (refeicao) => {
    return await prisma.refeicao.create({
        data: refeicao
    })
}

const edit = async (refeicao) => {
    return await prisma.refeicao.update({
        where: {
            id: refeicao.id
        },
        data: refeicao
    })
}

const remove = async (id) => {
    return await prisma.refeicao.delete({
        where: {
            id
        },
    })
}

export default {getAll, getById, create, edit, remove, validateRefeicaoToCreate, validaterRefeicaoToUpdate}