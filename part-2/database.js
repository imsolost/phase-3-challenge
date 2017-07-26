const pgp = require('pg-promise')()
const connectionString = `pg://${process.env.USER}@localhost:5432/grocery_store`
const db = pgp( connectionString )

const queries = {
  allItems: () => db.any('SELECT * FROM items'),

  itemsInSection: section => db.any('SELECT id, name FROM items WHERE section = $1', [section]),

  cheapItems: () => db.any('SELECT id, name, price FROM items WHERE price < 10 ORDER BY price ASC', []),

  countItemsInSection: section => db.one('SELECT COUNT (section) FROM items WHERE section = $1', [section]),

  mostRecentOrders: () => db.any('SELECT id, order_date FROM orders ORDER BY id DESC LIMIT 10'),

  lastShopperName: () => db.one('SELECT name from shoppers WHERE id = (SELECT shopper_id FROM orders ORDER BY id DESC LIMIT 1)'),

  orderTotal: (id) => db.any('SELECT SUM (items.price) from orderdetails INNER JOIN items ON orderdetails.item_id=items.id WHERE order_id = $1')
}

module.exports = queries

// queries.allItems().then( data => {
//   console.log(data)
//   pgp.end()
// })
