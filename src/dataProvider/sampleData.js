
const genericFunction = require("../utils/genericFunction");

const sorryMessages = [
    "Sorry, I didn't get you",
    "Ohh... I could't understand your request. Sorry!",
    "I'm sorry, I didn't understand that"
];

const responseTypes = {
    quickReply: "quickReply",
    plainText: "plainText",
    hyperLink: "hyperLink",
    date: "date"
}

function generateBotResponse(msg) {
    if (!msg){
        msg = {
            type: responseTypes.plainText,
            text: sorryMessages[genericFunction.generateRandomNo(0, sorryMessages.length-1)]
        }
    }
    return {
        sender: "Bot",
        timestamp: genericFunction.formatDate(new Date()),
        type: msg.type,
        data: {
            text: msg.text,
            options: msg.options ? msg.options : []
        }
    }
}

const conversations = {
    "business matrix report": {
        type: responseTypes.quickReply,
        text: "I found the following reports for you. Please select one to proceed.",
        options: [
            { title: "Quarterly Matrix Report", response: "Quarterly Matrix Report" },
            { title: "eFile Usage Matrix", response: "eFile Usage Matrix" },
            { title: "UPLD & DNLD Report", response: "UPLD & DNLD Report" },
        ]
    },
    "efile usage matrix": {
        type: responseTypes.date,
        text: "Please select the start date"
    },
    "01-01-2022": {
        type: responseTypes.date,
        text: "Please select the end date"
    },
    "31-01-2022": {
        type: responseTypes.hyperLink,
        text: "Here is the eFile usage matrix report generated for 1-1-2022 to 31-1-2022",
        options: [
            { title: "Download the file", link: "https://filesamples.com/samples/document/csv/sample4.csv" },
        ]
    },
    "how to use the tool": {
        type: responseTypes.hyperLink,
        text: "Click the below link to navigate to eFile user guide",
        options: [
            { title: "Navigate me", link: "https://google.com" },
        ]
    },
    "under which category do i upload my health checkup report?": {
        type: responseTypes.plainText,
        text: "You can upload the health reports under below category. \n\n Medical > Miscellaneous Medical Document"
    },
    "how to search payroll related documents of roman reigns": {
        type: responseTypes.plainText,
        text: "1. eFile Homepage\n\n 2. Enter the userid or username in the textbot and hit search \r\n 3. Click on Payroll"
    }
}

const botWelcomeMessage = [
    {
        sender: "Bot",
        timestamp: genericFunction.formatDate(new Date()),
        type: responseTypes.quickReply,
        data: {
            text: "Hi, I am Efia the chatbot assistant of DFC tool, and I can help you with the following queries",
            options: [
                {
                    title: 'Business Matrix Report',
                    response: 'Business Matrix Report'
                },
                {
                    title: 'How to use DFC?',
                    response: 'How to use DFC?'
                },
                {
                    title: 'Find Document',
                    response: 'Find Document'
                },
                {
                    title: 'Manage Tool Access',
                    response: 'Manage Tool Access'
                },
                {
                    title: 'Others',
                    response: 'Others'
                },
            ]
        }
    }
];

module.exports = { botWelcomeMessage, conversations, generateBotResponse }