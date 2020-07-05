import ContactUs_PO from '../../pageObjects/page.contactUs';

const pagepath = require("../PageObjects/")

describe("Test contact us page on webdriveruni", () => {
    beforeEach(function() {
      ContactUs_PO.open();
      browser.setWindowSize(1800, 1200);

    });

    it("Submit all information via the contact us page", () => {
   

        ContactUs_PO.firstName("sayali");
        ContactUs_PO.lastName("Bankar");
        ContactUs_PO.emailAddress("test@test.com");
        ContactUs_PO.comments("Test");

        ContactUs_PO.submit();
   
    
    }); 
  });