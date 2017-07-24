DROP DATABASE IF EXISTS grocery_store;
CREATE DATABASE grocery_store;

\c grocery_store;

DROP TABLE IF EXISTS items;
CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  section VARCHAR(150) NOT NULL,
  price VARCHAR(150) NOT NULL
);

DROP TABLE IF EXISTS shoppers;
CREATE TABLE shoppers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(150) NOT NULL
);

DROP TABLE IF EXISTS orders;
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  shopper_id int,
  order_date date NOT NULL DEFAULT CURRENT_DATE,
  items VARCHAR(150) NOT NULL UNIQUE,
  FOREIGN KEY (shopper_id) REFERENCES shoppers(id)
);
