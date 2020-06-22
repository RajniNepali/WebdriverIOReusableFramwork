var config = require('../config/config');
var mysql = require('mysql');
var connection = mysql.createConnection(config.databaseOptions);

// var test = [];
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

// Read database querry
var test = connection.query('SELECT * FROM authors', (err,rows) => {
    if(err) throw err;
  
    console.log('Data received from Db:');
    console.log(rows);
    setValue(rows);
  });

  function setValue(value)
  {
    test = value;
    console.log('saved data is :');
    console.log(test);
    }

connection.end((err) => {
    // The connection is terminated gracefully
    // Ensures all remaining queries are executed
    // Then sends a quit packet to the MySQL server.
  });


  //module.exports = rows;