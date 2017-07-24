const pgp = require('pg-promise')()
const connectionString = `pg://${process.env.USER}@localhost:5432/grocery_store`
const db = pgp( connectionString )

exports.queries = {
  allItems: () => db.any('SELECT * FROM items', []),

  itemsInSection: section => db.any('SELECT * FROM items WHERE section = $1', [section]),

  cheapItems: () => db.any('SELECT * FROM items WHERE price < 10 ORDER BY price ASC', []),


  create: (email, password) => db.one('INSERT INTO userstable (email, password) VALUES ($1, $2) RETURNING (id)', [email, password])
}
