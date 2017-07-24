\c grocery_store;

COPY items (name, price, section) FROM '/Users/ryankent/Desktop/LG/phase-3-challenge/part-2/grocery.csv' DELIMITER ',' HEADER CSV;

INSERT INTO shoppers (id, name)
VALUES ('1', 'shopper1'),
    ('2', 'shopper2'),
    ('3', 'shopper3');

INSERT INTO orders (shopper_id, order_date, items)
VALUES ('1', '7/11/2017', 'Milk', 'dairy'),
    ('1', '8/20/2017', 'Bacn', 'meat'),
    ('2', '9/13/2017', 'Pizza', 'frozen');
