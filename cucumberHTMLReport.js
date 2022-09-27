
const report = require("multiple-cucumber-html-reporter");
report.generate({
    jsonDir: "/Users/A-10765/IdeaProjects/mystays_automation_cypress9/cypress/reports/cucumber-json",
	reportPath: "/Users/A-10765/IdeaProjects/mystays_automation_cypress9/cypress/reports",
    metadata: {
        browser: {
            name: "chrome",
            version: "105.0.5195.125",
        },
        device: "Mac",
        platform: {
            name: "mac",
            version: "12.2.1",
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