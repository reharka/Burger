var mysql = require('mysql');

var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "TSar0428",
        database: "burgers_DB"
    });
};

connection.connect();

// var mysql = require("mysql");
// var connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "burgers_DB"
// })

// connection.connect(function (err) {
//     if (err) throw err;
//     console.log("Connected as id: " + connection.threadId);
// });

// port = 3000;

module.exports = connection;
