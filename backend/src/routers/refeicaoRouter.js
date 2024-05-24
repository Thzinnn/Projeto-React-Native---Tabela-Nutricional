import express from 'express'
import listAll from '../controllers/refeicao/listAll.js'
import getById from '../controllers/refeicao/getById.js'
import create from '../controllers/refeicao/create.js'
import edit from '../controllers/refeicao/update.js'
import remove from '../controllers/refeicao/remove.js'

const router = express.Router()

router.get('/', listAll )
router.get('/:id', getById)
router.post('/', create)
router.put('/:id', edit)
router.delete('/:id', remove)

export default router