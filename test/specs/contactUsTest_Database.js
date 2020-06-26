import ContactUs_PO from '../../page-objects/page.ContactUs_PO';
var mysql = require('mysql');
import DataReader from "../../Wrappers/DataReader"
import BaseMethods from '../../Wrappers/BaseMethods';
import Read from '../../MySql/Read_Database';

let data = Read.ReadDatabase
console.log('Data received is:');
console.log(data);


describe("Test contact us page on webdriveruni", () => {
    beforeEach(function() {
      ContactUs_PO.open();
      browser.setWindowSize(1800, 1200);

    });

    given(data).it("Submit all information via the contact us page", 
    function(FirstName,LastName,Email,Comments)
     {
        ContactUs_PO.formFillUp(FirstName,LastName,Email,Comments); 
    }); 

  });