var config = require('../ConfKeys/dbConfig');
var mysql = require('mysql');
var connection = mysql.createConnection(config.databaseOptions);
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

// Update database querry

connection.query(
  'UPDATE authors SET city = ? Where ID = ?',
  ['Leipzig', 3],
  (err, result) => {
    if (err) throw err;

    console.log(`Changed ${result.changedRows} row(s)`);
  }
);


connection.end((err) => {
    // The connection is terminated gracefully
    // Ensures all remaining queries are executed
    // Then sends a quit packet to the MySQL server.
  });