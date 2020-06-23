var config = require('../config/config');
var mysql = require('mysql');
var connection = mysql.createConnection(config.databaseOptions);

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});
//FirstName,LastName,Email,Comments
const contact = { FirstName: 'Craig Buckler', LastName: 'Exmouth' , Email: 'test@test.com' , Comments: 'test Comments'};
connection.query('INSERT INTO Contacts SET ?', contact, (err, res) => {
  if(err) throw err;

  console.log('Last insert ID:', res.insertId);
});

connection.end((err) => {
    // The connection is terminated gracefully
    // Ensures all remaining queries are executed
    // Then sends a quit packet to the MySQL server.
  });