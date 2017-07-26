const { expect } = require('chai')
const queries = require('./database')
const pgp = require('pg-promise')()

describe('queries', function(){
  describe('allItems', () => {
    it('retreives all items from the database', function() {
      return queries.allItems()
        .then( function(data) {
          expect(data).to.be.an('array')
          expect(data.length).to.eql(41)
      })
    })
  })

  describe('itemsInSection', () => {
    it('retreives all items from the indicated section', function() {
      return queries.itemsInSection('bulk')
        .then( function(data) {
          expect(data).to.be.an('array')
          expect(data[0].name).to.eql('Flour')
          expect(data[1].name).to.eql('Pasta')
          expect(data[2].name).to.eql('Rice')
          pgp.end()
      })
    })
  })

  describe('cheapItems', () => {
    it('retreives all items less than $10', function() {
      return queries.itemsInSection()
        .then( function(data) {
          expect(data).to.be.an('array')
          expect(data[0].name).to.eql('Flour')
          expect(data[1].name).to.eql('Pasta')
          expect(data[2].name).to.eql('Rice')
          pgp.end()
      })
    })
  })

})
