var config = require('../config/config');
var mysql = require('mysql');
var connection = mysql.createConnection(config.databaseOptions);

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});
const author = { name: 'Craig Buckler', city: 'Exmouth' };
connection.query('INSERT INTO authors SET ?', author, (err, res) => {
  if(err) throw err;

  console.log('Last insert ID:', res.insertId);
});

connection.end((err) => {
    // The connection is terminated gracefully
    // Ensures all remaining queries are executed
    // Then sends a quit packet to the MySQL server.
  });