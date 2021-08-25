const villains = require('../villains')
const models = require('../models')

const getAllVillains = (request, response) => {
    const villains = models.villains.findAll()

    return response.send(heroes)
}

const getVillainBySlug = (request, response) => {
    const { slug } = request.params

    const foundVillain = villains.filter((villain) => { villain.slug === slug})

    return response.send(foundVillain)
}