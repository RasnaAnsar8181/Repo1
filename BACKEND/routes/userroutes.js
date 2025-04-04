const express = require('express')
const user_controller = require('../controller/usercontroller')
const router = express.Router()

router.get('/',user_controller.getrecords)
router.post('/',user_controller.postrecords)
router.patch('/',user_controller.updaterecords)
router.put('/:id',user_controller.updaterecordsByid)
router.delete('/:id',user_controller.deleterecords)

module.exports = router