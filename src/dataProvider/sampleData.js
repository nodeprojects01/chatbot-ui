
const genericFunction = require("../utils/genericFunction");

const sorryMessages = [
    "Sorry, I didn't get you",
    "Ohh... I could't understand your request. Sorry!",
    "I'm sorry, I didn't understand that"
];

const responseTypes = {
    quickReply: "quickReply",
    plainText: "plainText",
    hyperLink: "hyperLink"
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
    "Metrics Report": {
        type: responseTypes.quickReply,
        text: "I found the following reports for you. Please select one to proceed.",
        options: [
            { title: "Quarterly Matrix Report", response: "Quarterly Matrix Report" },
            { title: "eFile Usage Matrix", response: "eFile Usage Matrix" },
            { title: "UPLD & DNLD Report", response: "UPLD & DNLD Report" },
        ]
    },
    "eFile Usage Matrix": {
        type: responseTypes.plainText,
        text: "Please select the start date"
    },
    "1-1-2022": {
        type: responseTypes.plainText,
        text: "Please select the end date"
    },
    "31-1-2022": {
        type: responseTypes.hyperLink,
        text: "Here is the eFile usage matrix report generated for 1-1-2022 to 31-1-2022",
        options: [
            { title: "Click to Download", link: "https://filesamples.com/samples/document/csv/sample4.csv" },
        ]
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
                    title: 'Metrics Report',
                    response: 'Metrics Report'
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