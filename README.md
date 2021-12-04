# autochek
Test Assessment for QA Engr

Framework: NightwatchJs
Reporting: https://testersdock.com/nightwatch-js-html-report/

Rationale for major stack is ease of writing code, built on nodeJS and Selenium, possible integration with BDD framework(Cucumber), html reporting and possible integration with CI/CD tool.

Run a test by typing the following in terminal: 
'./node_modules/.bin/nightwatch -t ./tests/UpdateProfile.js'

Run all tests by typin the following in terminal:
'npx nightwatch tests'

Run all tests with report by typing the following in terminal:
'npx nightwatch tests --reporter html-reporter.js'
