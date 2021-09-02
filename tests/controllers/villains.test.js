const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const { describe, it } = require('mocha')
const { getAllVillains, getVillainBySlug, saveNewVillain } = require('../../controllers/villains')

chai.use(sinonChai)
const { expect } = chai

describe('Controllers - villains'), () => {
  describe('getAllVillains', () => {})

  describe('getVillainBySlug', () => {})

  describe('saveNewVillain', () => {})
}