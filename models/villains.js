const Sequelize = require('sequelize')
const villains = (connection) => connection.define('villains', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: Sequelize.STRING },
  movie: { type: Sequelize.STRING },
  slug: { type: Sequelize.STRING },
})

module.exports = villains
