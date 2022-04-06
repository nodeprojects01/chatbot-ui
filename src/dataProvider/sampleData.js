
const responseTypes = require("../models/responseTypes");
const axios = require('axios');

async function conversations (text) {
    console.log("calling backend framework -", text)
    const resp = await axios.post('/getQueryResponse', {
        query: text
    }).then(function (response) {
        return response;
    }).catch(function (error) {
        return error;
    });
    return resp;
}

const conversations_test = (text) => {
    switch (text) {
        case "welcome": return {
            type: responseTypes.plainText,
            text: "Hi, I am Efia the chatbot assistant, and I can help you with the following queries",
            followText: [
                {
                    type: responseTypes.quickReply,
                    options: [
                        {
                            title: 'Business Metrics Report',
                            response: 'Business Metrics Report'
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
            ]
        }

        case "hi":
        case "hello":
        case "good morning":
        case "good afternoon": return {
            type: responseTypes.plainText,
            text: "Hello, how can I help you"
        }

        case "help":
        case "how can you help":
        case "i need help": return {
            type: responseTypes.plainText,
            text: "Sure, I can help you with the following queries, click any one to begin!",
            followText: [
                {
                    type: responseTypes.quickReply,
                    options: [
                        {
                            title: 'Business Metrics Report',
                            response: 'Business Metrics Report'
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
                        }
                    ]
                }
            ]
        }

        case "download report":
        case "generate metrics report":
        case "business metrics report": return {
            type: responseTypes.plainText,
            text: "I found the following reports for you. Please select one to proceed.",
            followText: [
                {
                    type: responseTypes.quickReply,
                    options: [
                        { title: "DocType Intgration Report", response: "DocType Intgration Report" },
                        { title: "eFile Usage Metrics", response: "eFile Usage Metrics" },
                        { title: "UPLD & DNLD Report", response: "UPLD & DNLD Report" }
                    ]
                }
            ]
        }

        case "efile report":
        case "efile usage metrics": return {
            type: responseTypes.plainText,
            text: "What is the eFile type?",
            followText: [
                {
                    type: responseTypes.quickReply,
                    options: [
                        { title: "US eFile", response: "US eFile" },
                        { title: "Canada eFile", response: "Canada eFile" },
                        { title: "Puerto Rico eFile", response: "Puerto Rico eFile" },
                        { title: "Supply Chain eFile", response: "Supply Chain eFile" },
                        { title: "H&W eFile", response: "H&W eFile" }
                    ]
                }
            ]
        }

        case "puerto rico efile": return {
            type: responseTypes.plainText,
            text: "Please select the start date",
            followText: [
                {
                    type: responseTypes.date
                }
            ]
        }

        case "01-01-2022": return {
            type: responseTypes.plainText,
            text: "Please select the end date",
            followText: [
                {
                    type: responseTypes.date
                }
            ]

        }

        case "31-01-2022": return {
            type: responseTypes.plainText,
            text: "Here is the eFile usage metrics report generated for 1-1-2022 to 31-1-2022",
            followText: [
                {
                    type: responseTypes.hyperLink,
                    options: [
                        { title: "Download the file", link: "https://filesamples.com/samples/document/csv/sample4.csv" }
                    ]
                }
            ]
        }

        case "download puerto rico usage metrics for 1st jan 2022 to 31st jan 2022": return {
            type: responseTypes.plainText,
            text: "Here is the eFile usage metrics report generated for 1-1-2022 to 31-1-2022",
            followText: [
                {
                    type: responseTypes.hyperLink,
                    options: [
                        { title: "Download the file", link: "https://filesamples.com/samples/document/csv/sample4.csv" }
                    ]
                }
            ]
        }

        case "how to use dfc?":
        case "user guide":
        case "how to use the tool": return {
            type: responseTypes.plainText,
            text: "Click the below link to navigate to eFile user guide",
            followText: [
                {
                    type: responseTypes.hyperLink,
                    options: [
                        { title: "Navigate me", link: "https://google.com" }
                    ]
                }
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
            text: "Here is how you can find payroll documents of an associate",
            followText: [
                {
                    type: responseTypes.multiLine,
                    options: ["Go to eFile Homepage", "Enter the userid or username in the textbot and hit search", "Click on Payroll folder from the left panel"]
                }
            ]
        }

        case "check if 234441123 has uploaded the experience certificate": return {
            type: responseTypes.plainText,
            text: "I can see the experience certificate of j0k07az available under the following path. \n\n Payroll > Previous Job Documents"
        }

        case "find document":
        case "download a document": return {
            type: responseTypes.plainText,
            text: "please provide the store number"
        }

        case "02548": return {
            type: responseTypes.plainText,
            text: "please provide the user id of the associate whose document you want to download"
        }

        case "j0k07az": return {
            type: responseTypes.plainText,
            text: "please provide the document name you are looking for"
        }

        case "address proof": return {
            type: responseTypes.plainText,
            text: "Please find the address proof document of j0k07az to download",
            followText: [
                {
                    type: responseTypes.hyperLink,
                    options: [
                        { title: "Download the file", link: "https://filesamples.com/samples/document/csv/sample4.csv" }
                    ]
                }
            ]
        }

        case "download the address proof of j0k07az of store number 02548": return {
            type: responseTypes.plainText,
            text: "Please find the address proof document of j0k07az to download",
            followText: [
                {
                    type: responseTypes.hyperLink,
                    options: [
                        { title: "Download the file", link: "https://filesamples.com/samples/document/csv/sample4.csv" }
                    ]
                }
            ]
        }

        case "card":
        case "type of documents": return {
            type: responseTypes.plainText,
            text: "Please find the list of documents available for the associate j0k07az",
            followText: [
                {
                    type: responseTypes.cardCarousel,
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
                        }
                    ]
                }
            ]
        }

    }
}

module.exports = { conversations }