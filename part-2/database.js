const pgp = require('pg-promise')()
const connectionString = `pg://${process.env.USER}@localhost:5432/grocery_store`
const db = pgp( connectionString )

exports.queries = {
  allItems: () => db.any('SELECT * FROM items', []),

  itemsInSection: section => db.any('SELECT id, name FROM items WHERE section = $1', [section]),

  cheapItems: () => db.any('SELECT id, name, price FROM items WHERE price < 10 ORDER BY price ASC', []),

  countItemsInSection: section => db.any('SELECT Count (section) FROM items WHERE section = $1', [section]),

  mostRecentOrders(): () => db.any('SELECT id, order_date FROM orders ORDER BY id DESC LIMIT 10'),

  lastShopperName(): () => db.one('SELECT name from shoppers WHERE id = (SELECT shopper_id FROM orders ORDER BY id DESC LIMIT 1)'),

}
