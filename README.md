# WebdriverIOReusableFramwork
This is a Webdriverio Javascript based framework, can be used as a basic structure for any automation testing framework

This repository contains a collection of sample webdriverIO (v5x) projects and libraries that demonstrate how to use the tool and develop automation script using the Mocha framework. It support ES6 (via babel-register) and provides utilities to read data from MS-Excel, executes SQL statements to any database(RDBMS such as Oracle, TeraData, MySQL, Vertica) for end to end testing. It generate Spec, Allure reporters as well.

### Installation
This project is tested on **Node v8.10.0**.  While earlier versions of node may be compatible, they have not been tested or verified.

`JDK 1.8:` Install JDK 1.8+ and make sure class path is set properly. JAVA is require to start `Selenium Server` nothing else.

`Node.JS:` Install  from the site - https://nodejs.org/en/  take the LTS version based on your Operating system. Please make sure you install NodeJS globally.

Now navigate to the framework's package.json folder and run `npm install` to grab all dependencies.

### WebDriver IO Installation
Install WebdriverIO CLI
If you want to use WebdriverIO in your project for integration testing, we recommend using the test runner. It comes with lots of useful features that makes your life easier.
Since WebdriverIO version 5, the testrunner is in the @wdio/cli NPM package.
1. install the CLI:
                $ npm i --save-dev @wdio/cli

2. Generate Configuration File
Next, you’ll generate a configuration file to store your WebdriverIO settings.
To do that, just run the configuration utility:
$ npx wdio config -y

3. Start the Testrunner
Now, time to run your tests!
To do so, just run:
$ npx wdio wdio.conf.js

### Webdriverio -SeleniumStandalone plugin 

  To run your test you must have selenium  server up and running to execute any webdriverIO tests, or it will fail fast with an error. To start selenium automatically it has been added as part of `services: ['selenium-standalone']` in the .conf.js.  That's all there is to it.!.
  
 Install WebdriverIo latest version 
- Verify Node Js in installed on Your machine - node -v
- Install Webdriver io + Mocha + Selenium standalone service using below command,
 Command - npm i --save-dev webdriver@latest @wdio/cli mocha@latest selenium-standalone@latest @wdio/selenium-standalone-service

 - Setup Selenium Standalone server 
    Install selenium-standalone server on Windows :
        step 1. npm install -g selenium-standalone
        step 2. selenium-standalone install
        step 3. selenium-standalone start

### Babel
- Install Babel 
- Babel is a javascript compiler
Command :-npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/register
Create - babel.config.js file in project 
Add following code into babel.config.js file :-
--------------------------------------
module.exports = {
    presets: [
        ['@babel/preset-env', {
            targets: {
                node: 12
            }
        }]
    ]
}
----------------------------------------
Wdio.config changes -

 mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
        compilers: ['js:@babel/register']
    },
	
----------------------------------

### Chai Assertion Library
Install chail - chai is a Assertion library
- npm i --save chai@latest -save -dev

### Chrome Driver SetUp
Install and setup ChromeDeiver :
- npm install wdio-chromedriver-service --save-dev
- npm install chromedriver --save-dev
