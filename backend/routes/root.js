const express = require('express')
const router = express.Router()
const controller = require('../controller/controller')

router.get('/', (_req, res) => {
  res.send('OK')
})

//  Ruta para consultar el nombre de los archivos
router.get('/files/list', controller.getFiles)

//  Ruta para obtener los archivos en formato JSON
router.get('/files/data', controller.downloadFiles)

module.exports = router
