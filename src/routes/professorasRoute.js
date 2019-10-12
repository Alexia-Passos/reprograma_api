const express = require ("express")
const router = express.Router()
const controller = require('../controllers/professorasController.js')

router.get('/', controller.get)
router.get('/professoraSemCpf', controller.getLista)
router.get('/:id', controller.getByIdProfa)



module.exports = router 