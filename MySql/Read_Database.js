var config = require('../config/DB_config');
var mysql = require('mysql');
var connection = mysql.createConnection(config.databaseOptions);
var result;


    connection.connect((err) => {
        if (err) throw err;
        console.log('Conneted!');
      });

      module.exports.ReadDatabase = connection.query('SELECT * FROM contactus', (err,rows) => {
        if(err) throw err;
          console.log('Data received from Db:');
          console.log(rows);
          result = rows;
      });
       
 
