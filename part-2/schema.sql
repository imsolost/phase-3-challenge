DROP DATABASE IF EXISTS grocery_store;
CREATE DATABASE grocery_store;

\c grocery_store;

DROP TABLE IF EXISTS items CASCADE;
CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  section VARCHAR(150) NOT NULL,
  price REAL
);

DROP TABLE IF EXISTS shoppers;
CREATE TABLE shoppers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(150) NOT NULL
);

DROP TABLE IF EXISTS orders;
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  shopper_id int NOT NULL,
  order_date date NOT NULL DEFAULT CURRENT_DATE,
  FOREIGN KEY (shopper_id) REFERENCES shoppers(id)
);

DROP TABLE IF EXISTS orderDetails;
CREATE TABLE orderDetails (
  id SERIAL PRIMARY KEY,
  order_id int NOT NULL,
  item_id int NOT NULL,
  FOREIGN KEY (item_id) REFERENCES items(id),
  FOREIGN KEY (order_id) REFERENCES orders(id)
);
