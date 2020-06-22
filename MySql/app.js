var config = require('../config/config');
var mysql = require('mysql');
var connection = mysql.createConnection(config.databaseOptions);

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});




