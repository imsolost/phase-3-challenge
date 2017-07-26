const { expect } = require('chai')
const queries = require('./database')
const pgp = require('pg-promise')()

describe('queries', () => {
  describe('allItems', () => {
    it('retreives all items from the database', () => {
      return queries.allItems()
        .then( function(data) {
          expect(data).to.be.an('array')
          expect(data.length).to.eql(41)
      })
    })
  })

  describe('itemsInSection', () => {
    it('retreives all items from the indicated section', () => {
      return queries.itemsInSection('bulk')
        .then( function(data) {
          expect(data).to.be.an('array')
          expect(data[0].name).to.eql('Flour')
          expect(data[1].name).to.eql('Pasta')
          expect(data[2].name).to.eql('Rice')
      })
    })
  })

  describe('cheapItems', () => {
    it('retreives all items less than $10', () => {
      return queries.cheapItems()
        .then( function(data) {
          expect(data).to.be.an('array')
          expect(data[0].name).to.eql('Fish')
          expect(data[data.length - 1].name).to.eql('Honey')
      })
    })
  })

  describe('countItemsInSection', () => {
    it('retreives number of items in specified section', () => {
      return queries.countItemsInSection('packaged')
        .then( function(data) {
          expect(parseInt(data.count)).to.eql(5)
          pgp.end()
      })
    })
  })
})
