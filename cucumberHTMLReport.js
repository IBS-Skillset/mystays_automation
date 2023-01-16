
const report = require("multiple-cucumber-html-reporter");
report.generate({
    jsonDir: "cypress/reports/cucumber-json/",
	reportPath: "cypress/reports/",
    metadata: {
        browser: {
            name: "Chrome",
            version: "109.0.5414.87",
        },
        device: "Mac",
        platform: {
            name: "mac",
            version: "Monterey 12.2.1",
        },
    },
     customData: {
        title: 'Execution details',
        data: [
            {label: 'Project', value: 'HappyStays'},
            {label: 'Release Version', value: 'TEST'},
            {label: 'Cypress Version', value: '11.0.1'},
            {label: 'Execution  Time', value: Date()},
        ]
    }
});