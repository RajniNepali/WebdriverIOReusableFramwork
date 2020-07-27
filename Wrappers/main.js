//This file is to be executed with Node . command to get the Google sheet Data
var {google} =require('googleapis');
//const Keys = require('./keysPage.json');
const Keys = require('../ConfKeys/GoogleSpreadsheetConfig.json');

const client = new google.auth.JWT(
Keys.client_email,
null,
Keys.private_key,
['https://www.googleapis.com/auth/spreadsheets']

);
client.authorize(function(err){
if(err){
    console.log(err)
    return;
} else {
        console.log('connected');
    gsrun(client)
}
});

async function gsrun(cl){
    try{
        const opt = {

            spreadsheetId:'1AkfWVbNHguWZDT0YjfvZASzFG4ybQh1HStvyGzEYf1Y',
            range:'Data!A1:C2'
        };
        const gsapi = google.sheets({version:'v4',auth:cl});
       //const gsapi = google.sheets({version:'v4',auth:sheetName});
        var SheetsObj = {};
        let data = await gsapi.spreadsheets.values.get(opt);
        console.log(data.data.values);
        var dataArray = data.data.values;
       console.log( dataArray[0][1]);
       for(var i =0;i<dataArray.length;i++){
       
        if(dataArray[0].length == dataArray[i].length)
        {
            console.log(dataArray[0].length+"=="+dataArray[1].length);
            SheetsObj[dataArray[0][0]]=dataArray[i][0];
            SheetsObj[dataArray[0][1]]=dataArray[i][1];
            SheetsObj[dataArray[0][2]]=dataArray[i][2];         
        }
       }
       console.log("Username :"+SheetsObj['username']);
       console.log("Email :"+SheetsObj['email']);
       console.log("Password" +SheetsObj['password']);
          
    return SheetsObj;       
    }catch(err) {
    console.error(err);
}
}






