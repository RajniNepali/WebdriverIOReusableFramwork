import ContactUs_PO from '../../page-objects/page.ContactUs_PO';
import DataReader from "../../Wrappers/DataReader"
import BaseMethods from '../../Wrappers/BaseMethods';
let given = require("mocha-testdata").given;
let fetchedData = DataReader.processExcel("Myspreadsheet_v1.xlsx");
const data = fetchedData.map(el => Object.values(el));
describe("Test contact us page on webdriveruni", () => {
    beforeEach(function() {
      ContactUs_PO.open();
      browser.setWindowSize(1800, 1200);

    });

    given(data).it("C1 Submit all information via the contact us page", 
    function(FirstName,LastName,Email,Comments)
     {
        ContactUs_PO.formFillUp(FirstName,LastName,Email,Comments); 
    }); 

  });