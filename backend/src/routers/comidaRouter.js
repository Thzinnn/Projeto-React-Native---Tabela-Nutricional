import express from 'express'
import listAll from '../controllers/comida/listAll.js'
import getById from '../controllers/comida/getById.js'
import create from '../controllers/comida/create.js'
import edit from '../controllers/comida/update.js'
import remove from '../controllers/comida/remove.js'

const router = express.Router()

router.get('/', listAll )
router.get('/:id', getById)
router.post('/', create)
router.put('/:id', edit)
router.delete('/:id', remove)

export default router