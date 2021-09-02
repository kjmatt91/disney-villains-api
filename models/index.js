const Sequelize = require('sequelize')
const villainsModel = require('./villains')

const connection = new Sequelize('disney_villains', 'root', 'KApk!82038', {
  host: 'localhost', dialect: 'mysql', define: { timestamps: true }
})

const villains = villainsModel(connection)

module.exports = { villains }
