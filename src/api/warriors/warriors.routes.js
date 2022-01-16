const warriorsRoutes = require('express').Router()
const upload = require('../../middlewares/file')
const { postNewWarriors, getAllWarriors, getWarriors } = require('./warriors.controller')


warriorsRoutes.get('/', getAllWarriors)
warriorsRoutes.get('/:id', getWarriors)
warriorsRoutes.post('/', upload.single('img'), postNewWarriors)



module.exports = warriorsRoutes