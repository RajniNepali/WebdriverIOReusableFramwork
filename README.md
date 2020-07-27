# WebdriverIOReusableFramwork
This is a Webdriverio Javascript based framework, can be used as a basic structure for any automation testing framework

This repository contains a collection of sample webdriverIO (v5x) projects and libraries that demonstrate how to use the tool and develop automation script using the Mocha framework. It support ES6 (via babel-register) and provides utilities to read data from MS-Excel, executes SQL statements to any database(RDBMS such as Oracle, TeraData, MySQL, Vertica) for end to end testing. It generate Spec, Allure reporters as well.

----------------------------------
### Installation
This project is tested on **Node v8.10.0**.  While earlier versions of node may be compatible, they have not been tested or verified.

`JDK 1.8:` Install JDK 1.8+ and make sure class path is set properly. JAVA is require to start `Selenium Server` nothing else.

`Node.JS:` Install  from the site - https://nodejs.org/en/  take the LTS version based on your Operating system. Please make sure you install NodeJS globally.

Now navigate to the framework's package.json folder and run `npm install` to grab all dependencies.

----------------------------------
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
Update the Package.json file as 
"scripts": {
    "test": "wdio"
}
To do so, just run:
$ npm test

----------------------------------
### Webdriverio -SeleniumStandalone plugin 

  To run your test you must have selenium  server up and running to execute any webdriverIO tests, or it will fail fast with an error. To start selenium automatically it has been added as part of `services: ['selenium-standalone']` in the .conf.js.  That's all there is to it.
  
 Install WebdriverIo latest version 
- Verify Node Js in installed on Your machine - node -v
- Install Webdriver io + Mocha + Selenium standalone service using below command,
 Command - npm i --save-dev webdriver@latest @wdio/cli mocha@latest selenium-standalone@latest @wdio/selenium-standalone-service

 - Setup Selenium Standalone server 
    Install selenium-standalone server on Windows :
        step 1. npm install -g selenium-standalone
        step 2. selenium-standalone install
        step 3. selenium-standalone start

----------------------------------
### Babel
- Install Babel 
- Babel is a javascript compiler
Command :-npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/register
Create - babel.config.js file in project 
Add following code into babel.config.js file :-
----------------------------------
module.exports = {
    presets: [
        ['@babel/preset-env', {
            targets: {
                node: 12
            }
        }]
    ]
}
----------------------------------
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

----------------------------------
### Chrome Driver SetUp
Install and setup ChromeDeiver :
- npm install wdio-chromedriver-service --save-dev
- npm install chromedriver --save-dev

----------------------------------
### Testrail Reporter for Webdriver.io (Test Management Tool Integration)
Pushes test results into Testrail system. Fork from mocha testrail reporter

Installation
- npm install wdio-testrail-reporter --save-dev
Usage
Ensure that your testrail installation API is enabled and generate your API keys. See http://docs.gurock.com/

Add reporter to wdio.conf.js:

let WdioTestRailReporter = require('./packages/wdio-testrail-reporter/lib/wdio-testrail-reporter'); 
...
 
    reporters: ['spec', WdioTestRailReporter],
    testRailsOptions: {
      domain: "yourdomain.testrail.net",
      username: "username",
      password: "password",
      projectId: 1,
      suiteId: 1,
      runName: "My test run"
    }

Mark your mocha test names with ID of Testrail test cases. Ensure that your case ids are well distinct from test descriptions.
Example :
    it("C123 C124 Authenticate with invalid user", . . .
    it("Authenticate a valid user C321", . . .

Only passed or failed tests will be published. Skipped or pending tests will not be published resulting in a "Pending" status in testrail test run.

Options
- domain: string domain name of your Testrail instance (e.g. for a hosted instance instance.testrail.net)
- username: string user under which the test run will be created (e.g. jenkins or ci)
- password: string password or API token for user
- projectId: number projet number with which the tests are associated
- suiteId: number suite number with which the tests are associated
- assignedToId: number (optional) user id which will be assigned failed tests

For More reference :https://www.npmjs.com/package/wdio-testrail-reporter

----------------------------------
### Reports Generation:

Reporting options added : Spec reports, Junit reports, Json reports, Allure reports

Below dependencies are added for reports ; 
1. "allure-commandline": "^1.4.22-1",  - npm install -g allure-commandline --save-dev
2. "wdio-video-reporter": "^3.0.0",    -npm install wdio-video-reporter
3. "@wdio/allure-reporter": "^6.1.14", -npm install @wdio/allure-reporter --save-dev
4. "@wdio/junit-reporter": "^6.1.14"   -npm install @wdio/junit-reporter --save-dev
5. "fs-extra": "^9.0.1"                -npm install fs-extra

Execution Command: npm run-script pretest ; npm run test ; npm run allure-reports
In package.json file , Scripts are added for all commands mentioned above.

pretest: All the previous reports will get cleared from project suite.
test: Added tests for execution.
allure-reports: It will execute generate Reports & Open reports.
(this command generates a report in temporary folder from the data found in the provided path and then creates a local server instance, serves generated report and opens it in the default browser.)
Function to take screenshot is added inside afterTest block in wdio.config.js file.

A typical Allure report will look like this
![image](https://user-images.githubusercontent.com/62230825/88511632-068c6980-cf9a-11ea-8558-838ebe43847b.png)
![image](https://user-images.githubusercontent.com/62230825/88513240-c4185c00-cf9c-11ea-8d16-786da6564087.png)

Backup Reports: 
Old reports are stored in BackupReports folder in suite.Once execution gets completed, onComplete block from AfterHooks will get executed & all the reports generated for that test execution will be stored in folder named webdriverioReports-Systemdate-SystemTime.

For More reference: https://webdriver.io/docs/allure-reporter.html

----------------------------------
### MultiBrowser Execution:

Execution can be done on Multiple browsers in parallel. Following Browsers are added for multibrowser testing in the suite.

1. Chrome Browsers
2. Internet Browsers
3. Mozilla firefox Browsers
We can also define maximum number of Instances of browser using variable maxInstances in wdio.conf.js file

Below dependencies added for MultiBrowser execution ;

1. "@wdio/firefox-profile-service": "^6.1.14",     -npm install @wdio/firefox-profile-service --save-dev
2. "@wdio/selenium-standalone-service": "^6.1.14", -npm install @wdio/selenium-standalone-service --save-dev
3. "chromedriver": "^83.0.0",                      -npm install chromedriver
4. "selenium-standalone": "^6.17.0",               -npm install selenium-standalone@latest -g
5. "wdio-chromedriver-service": "^6.0.3"           -npm install wdio-chromedriver-service --save-dev

----------------------------------
### Jenkins Integration:

Configuring Junit Reports to jenkins:
 
1: Install Jenkins JUnit Plugin
For Jenkins JUnit reporting, we need to install the JUnit Plug-in. For that, goto -> Jenkins Dashboard -> Manage Jenkins -> Manage Plugins -> Available -> Enter "JUnit Plugin" to the Find field -> Install

2: Configure Jenkins to collect and display the JUnit Test Results
In this step, we will configure Jenkins, so it will display the test results for individual builds as well as trend reporting. For that, navigate to:

Jenkins -> (choose Project) -> Configure -> Post-build Actions -> Publish JUnit test results report

Add *Junit Reports path*.xml to the "Test report XMLs" field.

3: Then trigger a new build by clicking on Project -> Build now.

4: When we click on the Tests Result link on the left (or on the lower middle part on the Status page).

A typical Junit report will look like this
![image](https://user-images.githubusercontent.com/62230825/88514319-b5cb3f80-cf9e-11ea-91a8-268c2570566b.png)

for more reference - https://webdriver.io/docs/junit-reporter.html

----------------------------------
### Database Integration :

Database used : mysql Dependency added : "mysql": "^2.18.1"
Command : npm install mysql
Database credentisls stored in config.js file in order to keep credentials secured.
Database Connection configuration is kept in the file config.js
Command to execute : node (filename).js

----------------------------------
### Multi-Environment :

To maintain different environment,
- Add all environment in config file
- Create a const in wdio.config.js file
- Update expected environment in 'baseURL'wdio.config.js file

----------------------------------
### Headless Browser :
To improve the performance, we can execute test cases in Headless Browser
- Add below code under 'brwoserName' configuration in wdio.config.js file
- Chrome
'goog:chromeOptions': {
args: ['headless', 'disable-gpu'],},
- Firefox

"moz:firefoxOptions":{
"args":['-headless']
},
