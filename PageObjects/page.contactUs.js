import page from "./page"
import BasepageMethods from "../Wrappers/baseMethodPage"
import DataReader from "../Wrappers/dataReaderPage"
import { config } from "../wdio.conf";
import baseMethodPage from "../Wrappers/baseMethodPage";

const pagepath = require("./page")

class ContactUs_PO extends page{ 

    open() {
        super.open(config.baseUrl);    
    }

    submitcontactUsForm() {
        BasepageMethods.clickElement(this.submitButton);
      }
  
    formFillUp(first_name,last_name,email_add,comments){
    console.log('Inside the Page contact');
    this.firstName.setValue(first_name);
    this.lastName.setValue(last_name);
    this.emailAddress.setValue(email_add);
    this.comments.setValue(comments);
    this.submitcontactUsForm();
    }  

    //  ContactUsForm ObjectRepository

    get firstName() {
     return $('//*[@name="first_name"]');
    }
    
    get lastName() {
     return $('//*[@name="last_name"]');
    }
    
   get emailAddress() {
     return $('//*[@name="email"]');
   }
    
    get comments() {
     return $('//*[@name="message"]');
    }
    
    get submitButton() {
     return $('//*[@value="SUBMIT"]');
    }
    
}
export default new ContactUs_PO()
