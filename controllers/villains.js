const villains = require('../villains')
const models = require('../models')

const getAllVillains = (request, response) => {
  const villains = models.villains.findAll()

  return response.send(villains)
}

const getVillainBySlug = (request, response) => {
  const { slug } = request.params

  const foundVillain = villains.filter((villain) => { villain.slug === slug })

  return response.send(foundVillain)
}

const saveNewVillain = (request, response) => {
  const { name, realname, firstappearance, slug } = request.body

  if (!name || !realname || !firstappearance || !slug) {
    return response.status(400).send('The following fields are reauired: name, realname, firstappearnace, slug')
  }

  const newVillain = { name, realname, firstappearance, slug }

  villains.push(newVillain)

  return response.status(201).send(newVillain)
}

module.exports = { getAllVillains, getVillainBySlug, saveNewVillain }
