
const responseTypes = require("../models/responseTypes");
const axios = require('axios');


async function conversations (text) {
    const resp = await axios.post('/getQueryResponse', {
        query: text
    }).then(function (response) {
        console.log("backend responose >> ", response);
        return response.data.data;
    }).catch(function (error) {
        console.log("backend error >> ", error);
        return error;
    });
    return resp;
}

const conversations_test = (text) => {
    switch (text) {
        case "welcome": return {
            messageType: responseTypes.plainText,
            message: "Hi, I am Efia the chatbot assistant, and I can help you with the following queries",
            followMessage: [
                {
                    messageType: responseTypes.quickReplies,
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
            messageType: responseTypes.plainText,
            message: "Hello, how can I help you"
        }

        case "help":
        case "how can you help":
        case "i need help": return {
            messageType: responseTypes.plainText,
            message: "Sure, I can help you with the following queries, click any one to begin!",
            followMessage: [
                {
                    messageType: responseTypes.quickReplies,
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
            messageType: responseTypes.plainText,
            message: "I found the following reports for you. Please select one to proceed.",
            followMessage: [
                {
                    messageType: responseTypes.quickReplies,
                    options: [
                        { title: "DocType Inetgration Report", response: "DocType Integration Report" },
                        { title: "eFile Usage Metrics", response: "eFile Usage Metrics" },
                        { title: "UPLD & DNLD Report", response: "UPLD & DNLD Report" }
                    ]
                }
            ]
        }

        case "efile report":
        case "efile usage metrics": return {
            messageType: responseTypes.plainText,
            message: "What is the eFile type?",
            followMessage: [
                {
                    messageType: responseTypes.quickReplies,
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
            messageType: responseTypes.plainText,
            message: "Please select the start date",
            followMessage: [
                {
                    messageType: responseTypes.date
                }
            ]
        }

        case "01-01-2022": return {
            messageType: responseTypes.plainText,
            message: "Please select the end date",
            followMessage: [
                {
                    messageType: responseTypes.date
                }
            ]

        }

        case "31-01-2022": return {
            messageType: responseTypes.plainText,
            message: "Here is the eFile usage metrics report generated for 1-1-2022 to 31-1-2022",
            followMessage: [
                {
                    messageType: responseTypes.hyperLink,
                    options: [
                        { title: "Download the file", link: "https://filesamples.com/samples/document/csv/sample4.csv" }
                    ]
                }
            ]
        }

        case "download puerto rico usage metrics for 1st jan 2022 to 31st jan 2022": return {
            messageType: responseTypes.plainText,
            message: "Here is the eFile usage metrics report generated for 1-1-2022 to 31-1-2022",
            followMessage: [
                {
                    messageType: responseTypes.hyperLink,
                    options: [
                        { title: "Download the file", link: "https://filesamples.com/samples/document/csv/sample4.csv" }
                    ]
                }
            ]
        }

        case "how to use dfc?":
        case "user guide":
        case "how to use the tool": return {
            messageType: responseTypes.plainText,
            message: "Click the below link to navigate to eFile user guide",
            followMessage: [
                {
                    messageType: responseTypes.hyperLink,
                    options: [
                        { title: "Navigate me", link: "https://google.com" }
                    ]
                }
            ]
        }

        case "where can i upload my health checkup report":
        case "under which category do i upload my health checkup report?": return {
            messageType: responseTypes.plainText,
            message: "You can upload the health reports under below category. \n\n Medical > Miscellaneous Medical Document"
        }

        case "how to search payroll related documents":
        case "how to search payroll related documents of roman reigns": return {
            messageType: responseTypes.plainText,
            message: "Here is how you can find payroll documents of an associate",
            followMessage: [
                {
                    messageType: responseTypes.multiLine,
                    options: ["Go to eFile Homepage", "Enter the userid or username in the textbot and hit search", "Click on Payroll folder from the left panel"]
                }
            ]
        }

        case "check if 234441123 has uploaded the experience certificate": return {
            messageType: responseTypes.plainText,
            message: "I can see the experience certificate of j0k07az available under the following path. \n\n Payroll > Previous Job Documents"
        }

        case "find document":
        case "download a document": return {
            messageType: responseTypes.plainText,
            message: "please provide the store number"
        }

        case "02548": return {
            messageType: responseTypes.plainText,
            message: "please provide the user id of the associate whose document you want to download"
        }

        case "j0k07az": return {
            messageType: responseTypes.plainText,
            message: "please provide the document name you are looking for"
        }

        case "address proof": return {
            messageType: responseTypes.plainText,
            message: "Please find the address proof document of j0k07az to download",
            followMessage: [
                {
                    messageType: responseTypes.hyperLink,
                    options: [
                        { title: "Download the file", link: "https://filesamples.com/samples/document/csv/sample4.csv" }
                    ]
                }
            ]
        }

        case "download the address proof of j0k07az of store number 02548": return {
            messageType: responseTypes.plainText,
            message: "Please find the address proof document of j0k07az to download",
            followMessage: [
                {
                    messageType: responseTypes.hyperLink,
                    options: [
                        { title: "Download the file", link: "https://filesamples.com/samples/document/csv/sample4.csv" }
                    ]
                }
            ]
        }

        case "card":
        case "type of documents": return {
            messageType: responseTypes.plainText,
            message: "Please find the list of documents available for the associate j0k07az",
            followMessage: [
                {
                    messageType: responseTypes.cardCarousel,
                    options: [
                        {
                            title: "I am Card 1",
                            subititle: "I am Subtitle",
                            media: {
                                messageType: "image",
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
                                messageType: "image",
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