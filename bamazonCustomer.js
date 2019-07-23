var mysql = require("mysql");
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

//empty array for product ids
var product_ids = [];

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    connection.query('SELECT * FROM products', function (error, results) {
        if (error) throw error;
        for (var i = 0; i < results.length; i++) {
            console.log('The item id is: ', results[i].item_id);
            console.log('The product is: ', results[i].product_name);
            console.log('The price is: $', results[i].price);
            console.log("~~~~~~~~~~~");
            product_ids.push(results[i].item_id.toString());
            console.log(product_ids);
        }

        var inquirer = require('inquirer');
        inquirer
            .prompt(
                [{
                    type: 'list',
                    name: 'product_id',
                    message: 'What product id would you like to buy?',
                    choices: product_ids,

                },
                {
                    type: 'input',
                    name: 'product_units',
                    message: 'How many units?',
                    default: '0'
                }
                ]


            )
            .then(answers => {
                console.log(JSON.stringify(answers.product_id, null, '  '));
                console.log(JSON.stringify(answers.product_units, null, '  '));

                connection.query('SELECT stock_quantity FROM products WHERE item_id='+answers.product_id, function (error, results) {
                    if (error) throw error;
                    console.log('The item id is: ', results[0].stock_quantity);
        
                });
            });
    });



    connection.end();
});
