/* eslint-disable no-console */
const express = require('express')
const { getAllVillains, getBySlug, createNewVillain } = require('./controllers/index')
const port = 1500

const app = express()

app.use(express.json())

app.get('/villains', getAllVillains)

app.get('/fillains/:slug', getBySlug)

app.post('/', createNewVillain)

app.listen(port, () => {
  console.log('Running on port ' + port)
})
