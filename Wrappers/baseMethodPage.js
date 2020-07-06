const sync = require('@wdio/sync').default
var sheetReader = require('./main.js').default
const ELEMENT_WAIT_PERIOD_SECONDS = 60;
class BaseMethodsPage 
{   
     /*===============================================================================
                                           
         Purpose: This method is ued to click On element for which the locator is passed.
         Author: Rajni Nepali
         Updated By:  
         Creation Date: 06/12/2020
         Input Parameters: locator
         Return value: Null  
         ===============================================================================*/

    clickElement(locator)
    {   try{
            var elementExist = browser.isElementDisplayed(locator);
            if(elementExist) {
            var timer=0;
                while((!elementExist) && timer < ELEMENT_WAIT_PERIOD_SECONDS){ 
                    timer++;
                    isEnabled = IsElementEnabled(locator);
                }
                browser.elementClick(locator); 
            }
        }catch (error)
        {
       console.log("Failed to click on the element" +  error.message);

        }
    }

    
     /*===============================================================================
                                           
         Purpose: This is a method used to set the value in the lement field whose locator is     passed to the method.
         Author: Rajni Nepali
         Updated By:  
         Creation Date: 06/12/2020
         Input Parameters: locator, value
         Return value: Null  
    ===============================================================================*/
    SetValue(locator, value)
    {
        try{
            var elementExist = browser.isElementDisplayed(locator);
            if(elementExist) {
            var isEnabled = IsElementEnabled(locator);
            browser.elementClear(locator);
            browser.sendKeys(value);
            }  
        }
        catch (error)
            {
           console.log("Failed to set the value into the element" +  error.message);

            }
    }
     /*==============================================================================                                       
         Purpose: This is a method used to get the text in the lement field whose locator is     passed to the method.
         Author: Rajni Nepali
         Updated By:  
         Creation Date: 06/12/2020
         Input Parameters: locator
         Return value: Null  
    ===============================================================================*/
    GetElementText(locator)
    {
        try{
            var elementExist = browser.isElementDisplayed(locator);
            if(elementExist) {
            var isEnabled = IsElementEnabled(locator);
            return browser.getElementText(locator);
            }
        }catch (error)
        {
       console.log("Failed to get the text from the element" +  error.message);

        }
    }

/*==============================================================================                                       
         Purpose: This is method used to get the value of the element whose pass the locator.
         Author: Rajni Nepali
         Updated By:  
         Creation Date: 06/12/2020
         Input Parameters: locator
         Return value: Null  
    ===============================================================================*/
    GetElementValue(locator)
    {
        try{
            var elementExist = browser.isElementDisplayed(locator);
            if(elementExist) {
            var isEnabled = IsElementEnabled(locator);
            return browser.getElementValue(locator);
            }
        }catch (error)
        {
       console.log("Failed to get the element value" +  error.message);

        }
    }
    
    
    /*===============================================================================
                                           
         Purpose:This method is used to get the element filed clear.
         Author: Rajni Nepali
         Updated By:  
         Creation Date: 06/12/2020
         Input Parameters: locator
         Return value: Null  
         ===============================================================================*/

    ClearElementField(locator)
    {
        try{
            var elementExist = browser.isElementDisplayed(locator);
            if(elementExist) {
            var isEnabled = IsElementEnabled(locator);
            browser.elementClear(locator);
            }
        }catch (error)
        {
       console.log("Failed clear the text field of the element" +  error.message);

        }    
    }

    /*===============================================================================
                                           
         Purpose:This method is used to double click on the element.
         Author: Rajni Nepali
         Updated By:  
         Creation Date: 06/12/2020
         Input Parameters: locator
         Return value: Null  
         ===============================================================================*/

    DoubleClickOnElement(locator)
    {
        try{
            var elementExist = browser.isElementDisplayed(locator);
            if(elementExist) {
            var timer=0;
                while((!elementExist) && timer < ELEMENT_WAIT_PERIOD_SECONDS){ 
                    timer++;
                    isEnabled = IsElementEnabled(locator);
                }
                browser.moveToElement(locator).positionDoubleClick();
            }
            else
            console.log("Element Not Found");
        }catch (error) {
    console.log("Failed to double click on the element" +  error.message);
            }
     }
    
    /*===============================================================================
                                           
         Purpose:This methods is used to Hover over the element.
         Author: Rajni Nepali
         Updated By:  
         Creation Date: 06/12/2020
         Input Parameters: locator
         Return value: Null  
    ===============================================================================*/
    HoverOnTheElement(locator)
    {
        try{
        var elementExist = browser.isElementDisplayed(locator);
        if(elementExist) {
        var timer=0;
            while((!elementExist) && timer < ELEMENT_WAIT_PERIOD_SECONDS){ 
                timer++;
                isEnabled = IsElementEnabled(locator);
            }
            browser.moveToElement(locator);
        }
        else
        console.log("Element Not Found");
        }catch (error) {
       console.log("Failed to Hover over the element" +  error.message);
        }
    }
    
    /*===============================================================================
                                           
         Purpose:This method is used to Hover and click on the element.
         Author: Rajni Nepali
         Updated By:  
         Creation Date: 06/12/2020
         Input Parameters: locator
         Return value: Null  
    ===============================================================================*/
    HoverAndClickOnElement(locator)
    {
        try{
        var elementExist = browser.isElementDisplayed(locator);
        if(elementExist) {
        var timer=0;
            while((!elementExist) && timer < ELEMENT_WAIT_PERIOD_SECONDS){ 
                timer++;
                isEnabled = browser.isElementEnabled(locator);
            }
            browser.moveToElement(locator);
            this.clickElement(locator);
        }
        else
        console.log("Element Not Found");
        }catch (error){
            console.log("Failed Hover and click over the element" +  error.message);
        }
    }
  
    /*===============================================================================
                                           
         Purpose://This method is used to select the dropdown option by passing the index value.
         Author: Rajni Nepali
         Updated By:  
         Creation Date: 06/12/2020
         Input Parameters: locator, Index
         Return value: Null  
    ===============================================================================*/
    SelectDropDownOptionByIndex(locator, index)
    {  
        try{
            var elementExists = browser.isElementDisplayed(locator);
            if (elementExists) {
                var timer = 0;
                isEnabled = browser.isElementEnabled(locator);
                while ((!isEnabled) && timer < ELEMENT_WAIT_PERIOD_SECONDS)
                {
                    timer++;
                    isEnabled = browser.isElementEnabled(locator);
                }
                $(locator).selectByIndex(index)          
            }
        }catch (error){
            console.log("Failed to select the dropdown option By index value" +  error.message);
        }    
    }


/*===============================================================================
                                           
         Purpose:This method is used to select the dropdown option by passing the atrribute and its value.
         Author: Rajni Nepali
         Updated By:  
         Creation Date: 06/12/2020
         Input Parameters: locator, Attribute, Value
         Return value: Null  
    ===============================================================================*/
        
   SelectDropDownOptionByAttribute(locator, attribute, value)
    {  
        try{
            var elementExists = browser.isElementDisplayed(locator);
            if (elementExists){
                var timer = 0;
                isEnabled = browser.isElementEnabled(locator);
                while ((!isEnabled) && timer < ELEMENT_WAIT_PERIOD_SECONDS){
                    timer++;
                    isEnabled = browser.isElementEnabled(locator);
                }
                $(locator).selectByAttribute(attribute,value)          
            }
        }
        catch (error){
                console.log("Failed to select dropdown option by attribute" +  error.message);
            }
    }
    
/*===============================================================================
                                           
         Purpose:This method is used to select the option in the dropdown by the visible text.
         Author: Rajni Nepali
         Updated By:  
         Creation Date: 06/12/2020
         Input Parameters: locator, Attribute, Value
         Return value: Null  
    ===============================================================================*/
    SelectDropDownOptionByVisibleText(locator, visibleText)
    {  
        try
        {
            var elementExists = browser.isElementDisplayed(locator);

            if (elementExists)
            {
                var timer = 0;
                isEnabled = browser.isElementEnabled(locator);

                while ((!isEnabled) && timer < ELEMENT_WAIT_PERIOD_SECONDS)
                {
                    timer++;
                    isEnabled = browser.isElementEnabled(locator);
                }
                $(locator).selectByVisibleText(visibleText)          
            }
        }catch (error){
       console.log("Failed to select the dropdown option from the visible text of the element" +  error.message);
        }
    }    
    
/*===============================================================================
                                           
         Purpose:This method is used to slect the radio option by the visible text of the element
         Author: Rajni Nepali
         Updated By:  
         Creation Date: 06/12/2020
         Input Parameters: locator, radioText
         Return value: Null  
    ===============================================================================*/
    SelectRadioButtonOptionByText(locator,radioText)
    {
        try{
                WaitForElementPresent(locator);
                ScrollToElement(locator);
                var elementExists = browser.isElementDisplayed(locator);
                if (elementExists){
                    var isEnabled = browser.isElementEnabled(locator);
                    var timer = 0;
                    while ((!isEnabled) && timer < ELEMENT_WAIT_PERIOD_SECONDS){
                        browser.pause(3000);
                        timer++;
                        isEnabled = browser.isElementEnabled(locator);
                    }
                    console.log("Test");
                    browser.waitUntil(browser.isElementDisplayed(locator));
                    var radioControls = browser.findElement(locator);
                    var labelControlText = radioControls.getElementText();
                        if (labelControlText.Equals(radioText)){
                            radioControl.Click();
                        }
                    }
                }catch (error){
                    console.log("Failed to select the radio button option by visible text" +  error.message);
                }
       }
     /*===============================================================================
                                           
         Purpose: This function is used verify if Object Is Displayed
         Author: Sayali Bankar
         Updated By:  
         Creation Date: 06/12/2020
         Input Parameters: locator
         Return value: True if sucessful else false   
         ===============================================================================*/

         VerifyObjectIsDisplayed(locator)
         {
             try
             {
                 var blstatus = $(locator).isDisplayed()
                 if (blstatus.Equals(true))
                 {
                     console.log("Object Is Displayed" + blstatus); 
                 }
                 else
                 {
                    console.log("Object Is Not  Displayed" + blstatus); 
                }
              }
             catch (error)
             {
                console.log("Failed to verify object displayed" + error.message);
             }
 
         }

    /*===============================================================================
                                          
         Purpose: This function is used verify if Object Is Displayed InViewport
         Author: Sayali Bankar
         Updated By:  
         Creation Date: 06/12/2020
         Input Parameters: locator
         Return value: True if sucessful else false   
         ===============================================================================*/

         VerifyObjectIsDisplayedInViewport(locator)
         {
             try
             {
                 var blstatus = $(locator).isDisplayedInViewport()
                 if (blstatus.Equals(true))
                 {
                    console.log("Object Is Displayed In ViewportClickable" + blstatus);
                 }
                 else 
                 {
                    console.log("Object Is Not Displayed In ViewportClickable" + blstatus);
                 }
             }
             catch (error)
             {
                console.log("Failed to verify object Displayed In ViewportClickable" + error.message);

             }
 
         }

    /*===============================================================================
                                            
         Purpose: This function is used verify if Object Is Displayed InViewport
         Author: Sayali Bankar
         Updated By:  
         Creation Date: 06/12/2020
         Input Parameters: locator
         Return value: True if sucessful else false   
         ===============================================================================*/

         VerifyObjectIsEnabled(locator)
         {
             try
             {
                 var blstatus = $(locator).isEnabled()
                 if (blstatus.Equals(true))
                 {
                    console.log("Object Is Displayed In ViewportClickable" + blstatus);
                 }
             }
             catch (error)
             {
                console.log("Failed to verify Object " + error.message);

             }
 
         }

         /*===============================================================================
                                          
         Purpose: This function is used to get Current browser url
         Author: Sayali Bankar
         Updated By:  
         Creation Date: 06/12/2020
         Return value: Returns string url 
         ===============================================================================*/

         getUrl()
         {
             try
             {
                var getCurrentUrl = browser.getUrl();
                console.log("Url is " + getCurrentUrl);
                
             }
             catch (error)
             {
                return false;
             }
 
         }

         /*===============================================================================
                                          
         Purpose: This function is used to get element text
         Author: Sayali Bankar
         Updated By:  
         Creation Date: 06/12/2020
         Return value: return string element text  
         ===============================================================================*/

         GetAlertText()
         {
             try
             {
                   var AlertText= browser.getAlertText()
                    console.log("Alert text is" + blstatus);
             }
             catch (error)
             {
                console.log("Failed to get Alert text" + error.message);
             }
         }

/*===============================================================================
                                          
         Purpose: This function is used to get element text
         Author: Sayali Bankar
         Updated By:  
         Creation Date: 06/12/2020
         Input Parameters: minimum number & Maximum number
         Return value: returns random number between given range 
         ===============================================================================*/

         getRandomNumber(minNumber, maxNumber)
         {
         try {
            var number = minNumber + (Math.random() * maxNumber);
            return Math.floor(number);
             }
        catch (error)
            {
           console.log("Failed to generate random number" +  error.message);

            }
         }

//END
}
export default new BaseMethodsPage()
    




