import express from 'express'
import listAll from '../controllers/comida/listAll.js'
import getById from '../controllers/comida/getById.js'
import create from '../controllers/comida/create.js'
import edit from '../controllers/comida/update.js'

const router = express.Router()

router.get('/', listAll )
router.get('/:id', getById)
router.post('/', create)
router.put('/:id', edit)

export default router