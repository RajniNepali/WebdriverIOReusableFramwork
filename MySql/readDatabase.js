var config = require('../ConfKeys/dbConfig');
var mysql = require('mysql');
var connection = mysql.createConnection(config.databaseOptions);
var result;

connection.connect((err) => {
        if (err) throw err;
        console.log('Conneted!');
      });
//module.exports.ReadDatabase = 
  function readDatabase(){
    connection.query('SELECT * FROM contactus', (err,rows) => {
        if(err) throw err;
          //console.log('Data received from Db:' +rows);       
          console.log(rows);
          result = rows;
      });
   }
       
 
