DROP DATABASE IF EXISTS products_db;

CREATE DATABASE products_db;

USE products_db;

CREATE TABLE products (
    item_id INTEGER(10) NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(20),
    department_name VARCHAR(30),
    price INTEGER(10),
    stock_quantity INTEGER(10),
    
);

INSERT INTO products_db (product_name, department_name, price, stock_quantity)
VALUES ("notebook", "office supplies", 4, 8);

INSERT INTO products_db (product_name, department_name, price, stock_quantity)
VALUES ("toilet paper", "household", 8, 15);

INSERT INTO products_db (product_name, department_name, price, stock_quantity)
VALUES ("peanut butter", "grocery", 3, 5);

INSERT INTO products_db (product_name, department_name, price, stock_quantity)
VALUES ("ruler", "office supplies", 3, 5);

INSERT INTO products_db (product_name, department_name, price, stock_quantity)
VALUES ("milk", "dairy", 4, 10);

INSERT INTO products_db (product_name, department_name, price, stock_quantity)
VALUES ("vitamins", "health", 16, 8);

INSERT INTO products_db (product_name, department_name, price, stock_quantity)
VALUES ("laundry detergent", "grocery", 14, 8);

INSERT INTO products_db (product_name, department_name, price, stock_quantity)
VALUES ("chocolate", "grocery", 2, 10);

INSERT INTO products_db (product_name, department_name, price, stock_quantity)
VALUES ("headphones", "electronics", 179, 5);

INSERT INTO products_db (product_name, department_name, price, stock_quantity)
VALUES ("cereal", "grocery", 4, 6);


