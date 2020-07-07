import ContactUs_PO from '../../PageObjects/page.contactUs';
import DataReader from "../../Wrappers/dataReaderPage"
import BaseMethods from '../../Wrappers/baseMethodPage';
let given = require("mocha-testdata").given;
let fetchedData = DataReader.processExcel("MyspreadsheetV1.xlsx");
const data = fetchedData.map(el => Object.values(el));
// describe('webdriver.io page', () => {
//     it('should have the right title', async () => {
//         await browser.url('https://webdriver.io')
//         await expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js');
//     })
// })
describe("Test contact us page on webdriveruniversity", () => {
    beforeEach(function() {
      ContactUs_PO.open();
      browser.setWindowSize(1800, 1200);
    });
    
    it('should have the right title', async () => {
      await expect(browser).toHaveTitle('WebDriver | Contact Us');
  });

    given(data).it("C1 Submit all information via the contact us page", 
    function(FirstName,LastName,Email,Comments)
     {
       console.log('Inside the It Test Case');
        ContactUs_PO.formFillUp(FirstName,LastName,Email,Comments); 
        
    }); 

  });