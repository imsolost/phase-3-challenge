\c grocery_store;

COPY items (name, price, section) FROM '/Users/ryankent/Desktop/LG/phase-3-challenge/part-2/grocery.csv' DELIMITER ',' HEADER CSV;

INSERT INTO shoppers (name)
VALUES ('shopper1'),
    ('shopper2'),
    ('shopper3'),
    ('shopper4'),
    ('shopper5');

INSERT INTO orders (shopper_id)
VALUES (1), (2), (3), (1), (2), (3), (1), (2), (3), (1), (2), (3);

INSERT INTO orderdetails (order_id, item_id)
VALUES (1, 2), (1, 3), (1, 4), (2, 2), (2, 3), (2, 4), (3, 2), (3, 3), (3, 4), (4, 7), (5, 8), (6, 9), (7, 7), (8, 8), (9, 9), (10,10);
