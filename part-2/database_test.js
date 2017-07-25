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
          pgp.end()
      })
    })
  })

})
