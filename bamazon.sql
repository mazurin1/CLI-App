DROP DATABASE IF EXISTS products_db;

CREATE DATABASE products_db;

USE products_db;

CREATE TABLE products (
    item_id INTEGER(10) NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(20),
    department_name VARCHAR(30),
    price INTEGER(10),
    stock_quantity INTEGER(10),
    PRIMARY KEY(item_id)
    
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("notebook", "office supplies", 4, 8), ("toilet paper", "household", 8, 15), 
("peanut butter", "grocery", 3, 5), ("ruler", "office supplies", 3, 5), 
("milk", "dairy", 4, 10), ("vitamins", "health", 16, 8);
("laundry detergent", "grocery", 14, 8), ("chocolate", "grocery", 2, 10),
("headphones", "electronics", 179, 5), ("cereal", "grocery", 4, 6);


