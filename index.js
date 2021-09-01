/* eslint-disable no-console */
const express = require('express')
const { getAllVillains, getVillainBySlug, saveNewVillain } = require('./controllers/villains')
const port = 1500

const app = express()

app.use(express.json())

app.get('/villains', getAllVillains)

app.get('/villains/:slug', getVillainBySlug)

app.post('/', saveNewVillain)

app.listen(port, () => {
  console.log('Running on port ' + port)
})
