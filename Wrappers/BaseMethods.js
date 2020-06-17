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
    




