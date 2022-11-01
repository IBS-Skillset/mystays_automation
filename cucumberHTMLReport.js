
const report = require("multiple-cucumber-html-reporter");
report.generate({
    jsonDir: "cypress/reports/cucumber-json/",
	reportPath: "cypress/reports/",
    metadata: {
        browser: {
            name: "Chrome",
            version: "106.0.5249.119",
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
            {label: 'Project', value: 'myStays.com Application'},
            {label: 'Release Version', value: 'test'},
            {label: 'Execution  Time', value: Date()},
        ]
    }
});