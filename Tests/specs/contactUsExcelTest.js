
import ContactUs_PO from '../../PageObjects/page.contactUs';
import DataReader from "../../Wrappers/dataReaderPage"
import BaseMethods from '../../Wrappers/baseMethodPage';


let given = require("mocha-testdata").given;
let fetchedData = DataReader.processExcel("MyspreadsheetV1.xlsx");
const data = fetchedData.map(el => Object.values(el));
describe("Test contact us page on webdriveruniversity", () => {
   
    it('should have the right title', () => {
      ContactUs_PO.open();
      expect(browser).toHaveTitle('WebDriver | Contact Us');
  });

    given(data).it("C1 Submit all information via the contact us page", 
    function(FirstName,LastName,Email,Comments)
     {
      ContactUs_PO.open();
      console.log('Inside the It Test Case');
      ContactUs_PO.formFillUp(FirstName,LastName,Email,Comments);          
      
    }); 

  });