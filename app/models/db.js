// const mysql = require("mysql");
// const dbConfig = require("../config/db.config");

// // Create a connection to the database
// const connection = mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"123456",
//     database:"testdb"
// });

// // open the MySql connection
// connection.connect(error => {
//     if (error) throw error;
//     console.log("Succesfully connected to the database")
// });

// module.exports = connection;

var mysql      = require('mysql');
var connection = mysql.createConnection({
    host:"localhost",
        user:"root",
        password:"kuliza123",
        database:"test_db"
});
 
// connection.connect();
 
// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });
 
// connection.end();

connection.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
  });

  module.exports = connection;