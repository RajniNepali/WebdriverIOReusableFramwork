//import ContactUs_PO from './page-objects/ContactUs_PO';
//import ContactUs_PO from 'C:\Users\sayali\Downloads\WebdriverIo\WebdriverResuableComponents-06-11-2020\WebdriverResuableComponents\page-objects\ContactUs_PO.js'

//import ContactUs_PO from '.../ContactUs_PO'
import ContactUs_PO from '../../page-objects/page.ContactUs_PO';

//const pagepath = require("../page-objects/")

describe("Test contact us page on webdriveruni", () => {
    beforeEach(function() {
      ContactUs_PO.open();
      browser.setWindowSize(1800, 1200);

    });

    it("Submit all information via the contact us page", () => {
   

        ContactUs_PO.firstName.setValue("sayali");
        ContactUs_PO.lastName.setValue("Bankar");
        ContactUs_PO.emailAddress.setValue("test@test.com");
        ContactUs_PO.comments.setValue("Test");

        ContactUs_PO.submit();
   
    
    }); 
  });