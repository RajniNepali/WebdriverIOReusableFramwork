import ContactUs_PO from '../../PageObjects/page.contactUs';
import DataReader from "../../Wrappers/dataReaderPage"
import BaseMethods from '../../Wrappers/baseMethodPage';
let given = require("mocha-testdata").given;
let fetchedData = DataReader.processExcel("MyspreadsheetV1.xlsx");
const data = fetchedData.map(el => Object.values(el));
describe('webdriver.io page', () => {
    it('should have the right title', () => {
        browser.url('https://webdriver.io')
        expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js');
    })
})

describe('webdriver.io page', () => {
    it('should have the right title', () => {
        browser.url('https://webdriver.io')
        expect(browser).toHaveTitle('WebdriverIO1 · Next-gen browser and mobile automation test framework for Node.js');
    })
})