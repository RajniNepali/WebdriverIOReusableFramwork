import page from "./page"
import BasepageMethods from "../Wrappers/BaseMethods"
import DataReader from "../Wrappers/DataReader"
const pagepath = require("./page")
 var SubmitButtonLocator= "//*[@value='SUBMIT']";
var FirstNameFiledLocator = '#contact_form > input:nth-child(1)';
var LastNameFiledLocator = '//*[@name="last_name"]';
var emailAddressFieldLocator = '//*[@name="email"]';
var CommentsFiledLocator ='//*[@name="message"]';
class ContactUs_PO extends page{ 

    open() {
        super.open("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        
    }
    constructor(driver) {
        super();
        this.driver = driver;
        }
    firstName(value) {
        BasepageMethods.SetValue(FirstNameFiledLocator,value);
    }
    
    lastName(value){
        BasepageMethods.SetValue(LastNameFiledLocator,value);
    }

    emailAddress(value) {
        BasepageMethods.SetValue(emailAddressFieldLocator,value);
    }

    comments(value) {
        BasepageMethods.SetValue(CommentsFiledLocator,value);
    }

    formFillUp(first_name,last_name,email_add,comments){
        this.firstName(first_name);
        this.lastName(last_name);
        this.emailAddress(email_add);
        this.comments(comments);
        this.submit();
        
    }

    submit() {
       // this.submitButton.click();
        BasepageMethods.clickElement (SubmitButtonLocator);   
    }

}
export default new ContactUs_PO()
//module.exports = new ContactUs_PO();
