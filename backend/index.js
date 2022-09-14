const express = require('express')

//  Puerto en el que se levantara la API
const PORT = 8080

const createApp = () => {
  const app = express()  
  const root = require('./routes/root')
  app.use('/', root)

  return app
}

const app = createApp()

app.listen(PORT, () => { console.log(`API Iniciada en http://localhost:${PORT}`) })

module.exports = { createApp }
