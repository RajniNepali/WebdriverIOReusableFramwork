const sync = require('@wdio/sync').default
const ELEMENT_WAIT_PERIOD_SECONDS = 60;
class BaseMethodsPage 
{
    //This method is ued to click On element for which the locator is passed.
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
        }catch(error){
        return false;
        }
    }

    //This is a method used to set the value in the lement field whose locator is passed to the method.
    SetValue(locator, value)
    {
        try{
            var elementExist = browser.isElementDisplayed(locator);
            if(elementExist) {
            var isEnabled = IsElementEnabled(locator);
            browser.elementClear(locator);
            browser.sendKeys(locator);
            }  
        }
        catch (error)
        {
            return false;
        }
    }

    // This is a methods used to get the text from the element which is displayed
    GetElementText(locator)
    {
        try{
            var elementExist = browser.isElementDisplayed(locator);
            if(elementExist) {
            var isEnabled = IsElementEnabled(locator);
            return browser.getElementText(locator);
            }
        }catch(error){
            return false;
        }
    }

    //This is method used to get the value of the element whose pass the locator.
    GetElementValue(locator)
    {
        try{
            var elementExist = browser.isElementDisplayed(locator);
            if(elementExist) {
            var isEnabled = IsElementEnabled(locator);
            return browser.getElementValue(locator);
            }
        }catch(error){
            return false;
        }
    }
    
    //This method is used to get the element filed clear.
    ClearElementField(locator)
    {
        try{
            var elementExist = browser.isElementDisplayed(locator);
            if(elementExist) {
            var isEnabled = IsElementEnabled(locator);
            browser.elementClear(locator);
            }
        }catch(error){
            return false;
        }    
    }

    //This method is used to double click on the element.
    DoubleClickOnElement(locator)
    {
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
    }

    //This methods is used to Hover over the element.
    HoverOnTheElement(locator)
    {
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
    }

    //This method is used to Hover and click on the element.
    HoverAndClickOnElement(locator)
    {
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
    }

    //This method is used to select the dropdown option by passing the index value.
    SelectDropDownOptionByIndex(locator, index)
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
                $(locator).selectByIndex(index)          
            }
        }
        catch (error)
        {
            ProcessError(e, locator);
        }
    }
//This method is used to select the dropdown option by passing the atrribute and its value.
    SelectDropDownOptionByAttribute(locator, attribute, value)
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
                $(locator).selectByAttribute(attribute,value)          
            }
        }
        catch (error)
        {
            ProcessError(e, locator);
        }
    }
    
    //This method is used to select the option in the dropdown by the visible text.
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
        }
        catch (error)
        {
            ProcessError(e, locator);
        }
    }

    //This method is used to slect the radio option by the visible text of the element
    SelectRadioButtonOptionByText(locator,radioText)
    {
        try{
                WaitForElementPresent(locator);
                ScrollToElement(locator);

                var elementExists = browser.isElementDisplayed(locator);

                if (elementExists)
                {
                    var isEnabled = browser.isElementEnabled(locator);
                    var timer = 0;

                    while ((!isEnabled) && timer < ELEMENT_WAIT_PERIOD_SECONDS)
                    {
                        browser.pause(3000);
                        timer++;
                        isEnabled = browser.isElementEnabled(locator);
                    }
                    browser.waitUntil(browser.isElementDisplayed(locator));
                    var radioControls = browser.findElement(locator);
                    var labelControlText = radioControls.getElementText();
                        if (labelControlText.Equals(radioText))
                        {
                            radioControl.Click();
                        }
                    }
                }
            catch (error)
            {
                return false;
            }
    }
    
    ScrollToElement(locator, alignTop = false)
    {
        try{
            browser.isElementDisplayed(locator);
            var element = browser.findElement(locator);
            $(locator).scrollIntoView();
        }catch(error)
        {
            return false;
        }
    }


}
export default new BaseMethodsPage()
    




