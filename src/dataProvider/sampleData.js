
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
    date: "date",
    multiLine: "multiLine",
    cardCarousel: "cardCarousel"
}

function generateBotResponse(msg) {
    if (!msg) {
        msg = {
            type: responseTypes.plainText,
            text: sorryMessages[genericFunction.generateRandomNo(0, sorryMessages.length - 1)]
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

const conversations = (text) => {
    switch (text) {
        case "hi":
        case "hello":
        case "good morning":
        case "good afternoon": return {
            type: responseTypes.plainText,
            text: "Hello, how can I help you"
        }

        case "download report":
        case "generate matrix report":
        case "business matrix report": return {
            type: responseTypes.quickReply,
            text: "I found the following reports for you. Please select one to proceed.",
            options: [
                { title: "Quarterly Matrix Report", response: "Quarterly Matrix Report" },
                { title: "eFile Usage Matrix", response: "eFile Usage Matrix" },
                { title: "UPLD & DNLD Report", response: "UPLD & DNLD Report" },
            ]
        }

        case "efile report":
        case "efile usage matrix": return {
            type: responseTypes.date,
            text: "Please select the start date"
        }

        case "01-01-2022": return {
            type: responseTypes.date,
            text: "Please select the end date"
        }

        case "31-01-2022": return {
            type: responseTypes.hyperLink,
            text: "Here is the eFile usage matrix report generated for 1-1-2022 to 31-1-2022",
            options: [
                { title: "Download the file", link: "https://filesamples.com/samples/document/csv/sample4.csv" },
            ]
        }

        case "how to use dfc?":
        case "user guide":
        case "how to use the tool": return {
            type: responseTypes.hyperLink,
            text: "Click the below link to navigate to eFile user guide",
            options: [
                { title: "Navigate me", link: "https://google.com" },
            ]
        }

        case "where can i upload my health checkup report":
        case "under which category do i upload my health checkup report?": return {
            type: responseTypes.plainText,
            text: "You can upload the health reports under below category. \n\n Medical > Miscellaneous Medical Document"
        }

        case "how to search payroll related documents":
        case "how to search payroll related documents of roman reigns": return {
            type: responseTypes.plainText,
            text: "1. eFile Homepage 2. Enter the userid or username in the textbot and hit search 3. Click on Payroll"
        }

        case "check if j0k07az has uploaded the experience certificate": return {
            type: responseTypes.plainText,
            text: "I can see the experience certificate of j0k07az available under Payroll > Previous Job Documents"
        }

        case "find document":
        case "download a document": return {
            type: responseTypes.plainText,
            text: "please provide the user id of the associate whose document you want to download"
        }

        case "j0k07az": return {
            type: responseTypes.plainText,
            text: "please provide the document name you are looking for"
        }

        case "address proof": return {
            type: responseTypes.hyperLink,
            text: "Please find the address proof document of j0k07az to download",
            options: [
                { title: "Download the file", link: "https://filesamples.com/samples/document/csv/sample4.csv" }
            ]
        }

        case "card":
        case "type of documents": return {
            type: responseTypes.cardCarousel,
            text: "Please find the list of documents available for the associate j0k07az",
            options: [
                {
                    title: "I am Card 1",
                    subititle: "I am Subtitle",
                    media: {
                        type: "image",
                        url: "https://image.flaticon.com/icons/svg/145/145867.svg",
                    },
                    buttons: [
                        {
                            action: "link",
                            title: "Buy",
                            tooltip: "Buy this product with 20% discount",
                            url: "http://myurl"
                        },
                        {
                            action: "link",
                            title: "Sell",
                            tooltip: "Buy this product with 20% discount",
                            url: "http://myurl"
                        }
                    ]
                },
                {
                    title: "I am Card 2",
                    subititle: "I am Subtitle",
                    media: {
                        type: "image",
                        url: "https://image.flaticon.com/icons/svg/145/145867.svg",
                    },
                    buttons: [
                        {
                            action: "link",
                            title: "Buy",
                            tooltip: "Buy this product with 20% discount",
                            url: "http://myurl"
                        },
                        {
                            action: "link",
                            title: "Sell",
                            tooltip: "Buy this product with 20% discount",
                            url: "http://myurl"
                        }		
                    ]
                }]
        }
    }

}

const botWelcomeMessage = [
    {
        sender: "Bot",
        timestamp: genericFunction.formatDate(new Date()),
        type: responseTypes.quickReply,
        data: {
            text: "Hi, I am Efia the chatbot assistant, and I can help you with the following queries",
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