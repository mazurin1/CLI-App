var mysql = require("mysql");
var inquirer = require('inquirer');
require('dotenv').config();

var connection = mysql.createConnection({
    host: process.env.DB_HOST,

    // Your port; if not 3306
    port: process.env.DB_PORT,

    // Your username
    user: process.env.DB_USER,

    // Your password
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA
});


connection.query('SELECT * FROM products', function (error, results) {
    if (error) throw error;
    for (var i = 0; i < results.length; i++) {
        console.log('The item id is: ', results[i].item_id);
        console.log('The product is: ', results[i].product_name);
        console.log('The price is: $', results[i].price);
        console.log("~~~~~~~~~~~");
    }

    inquirer.prompt(
        [{
            type: 'input',
            name: 'product_id',
            message: 'What product id would you like to buy?'
        },
        {
            type: 'input',
            name: 'product_units',
            message: 'How many units?'
        }]
    ).then(answers => {
    
        // Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.
        console.log(JSON.stringify(answers.product_id, null, '  '));
        console.log(JSON.stringify(answers.product_units, null, '  '));
    
        connection.query('SELECT stock_quantity, price FROM products WHERE item_id='+answers.product_id, function (error, results) {
            if (error) throw error;
            if (results[0].stock_quantity >= answers.product_units) {
                var newQuantity=results[0].stock_quantity - answers.product_units // * This means updating the SQL database to reflect the remaining quantity.
                var query = 'UPDATE products SET stock_quantity='+newQuantity+' WHERE item_id='+answers.product_id
                
                connection.query(query, function (error, results2) {
                if (error) throw error;


                console.log("total price: $" + parseInt(answers.product_units) * parseInt(results[0].price))

                });
                // * Once the update goes through, show the customer the total cost of their purchase.
            } else {
                console.log("Insufficient quantity!")
            }
        });
    });

});

