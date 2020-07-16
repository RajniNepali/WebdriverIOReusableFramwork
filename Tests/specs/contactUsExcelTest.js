
// import ContactUs_PO from '../../PageObjects/page.contactUs';
// import DataReader from "../../Wrappers/dataReaderPage"
// import BaseMethods from '../../Wrappers/baseMethodPage';
// import test from '../../Wrappers/main';
// import Read from '../../MySql/readDatabase';

// //
// var {google} =require('googleapis');
// const Keys = require('../../Wrappers/keysPage.json');
// var g = require('../../Wrappers/main')
// import { authorize } from '../../Wrappers/';

// //

// let given = require("mocha-testdata").given;
// let fetchedData = DataReader.processExcel("MyspreadsheetV1.xlsx");
// const data = fetchedData.map(el => Object.values(el));
// describe("Test contact us page on webdriveruniversity", () => {
   
//     it('should have the right title', async () => {
//       ContactUs_PO.open();
//       await expect(browser).toHaveTitle('WebDriver | Contact Us');
//   });

//     given(data).it("C1 Submit all information via the contact us page", 
//     function(FirstName,LastName,Email,Comments)
//      {
//       ContactUs_PO.open();
//        console.log('Inside the It Test Case');
//         ContactUs_PO.formFillUp(FirstName,LastName,Email,Comments); 
//         //Read.ReadDatabase.


//         //test.SheetsObj['username'];
//         //console.log("Username from google sheet is  :"+test.SheetsObj['username']);
//         // console.log("Username from google sheet is  :"+test.Google);
//         //var sheet = cl;
//         //var returnResult = test.gsrun();
//         // var returnResult = sample1("SampleString");
//         //  let fetchedData1 = test.gsrun();
//         // const data1 = fetchedData1.map(el => Object.values(el));
//         const client = new google.auth.JWT(
//           Keys.client_email,
//           null,
//           Keys.private_key,
//           ['https://www.googleapis.com/auth/spreadsheets']
          
//           );
//           test.client.
//           test.client.authorize();
//           g.client.authorize();
//           authorize(C1);

//          // client.authorize();
        
      
//     }); 

//   });