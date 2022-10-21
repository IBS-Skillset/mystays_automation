# mystays_automation
    This automation repo is for myStays.com application test cases.

# Introduction
    This framework uses Cypress for automating browser/UI actions and assertions. All tests and code are written in JavaScript. 

# Getting Started
    # Prerequisites to run the automated tests:

        I.  A suitable IDE like Visual Studio Code
        II. Npm v6 or above, Node.js v14 or above

    # Cypress Environment Setup
        https://confluence.expedia.biz/display/TVLD/Cypress+Environment+Setup

# How to write Tests on Cypress
    https://confluence.expedia.biz/display/TVLD/How+to+write+Tests+on+Cypress

# To run tests locally 
    npm install
    npx cypress open
    npx cypress run

    # To run tests using Cypress run command: 
        npm run cypress:run
    # To run tests using Cypress runner:
        npm run cypress:open

# To generate HTML reports 
    node cucumberHTMLReport.js

# Project Structure
    fixtures: It stores all the test data information. Usually, the data is stored in JSON format.
    integration: All the test files(feature files, step defs, pages) are kept in this folder.
        integration>common: reusable step definitions are added here.
        integration>pages: page elements and locators.
    plugins: This folder includes index.js file. We can write custom methods to handle cypress events.
    reports: cucumberHTMLReport will be generated here: index.html
    support: It contains the function(index.js) to capture screenshots.
    videos/screenshots: stores screenshots and executions videos during test run.
    cucumberHTMLReport.js: cucumber-HTML report configuration.
    cypress.json: main configuration file and we keep base URL, timeouts here. 
 
