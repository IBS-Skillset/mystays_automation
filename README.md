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

# To generate HTML reports 
    node cucumberHTMLReport.js

# Project Structure
    fixtures: It stores all the test data information. 
    integration: All the test files(feature files, step defs, pages) are kept in this folder.
    plugins: This folder includes index.js file.
    reports: cucumber HTML report is generated here - index.html
    support: It contains the function(index.js) to capture screenshots.
    videos/screenshots: stores screenshots and executions videos of test run
    cypress.json : configuration file. 
