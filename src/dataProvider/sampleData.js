
const genericFunction = require("../utils/genericFunction");

const botResponses = [
    "Hi, how are you?",
    "Ohh... I can't understand what you trying to say. Sorry!",
    "I like to play games... But I don't know how to play!",
    "Sorry if my answers are not relevant. :))",
    "I feel sleepy! :("
];

const sampleData = [{
    sender: "Bot",
    timestamp: genericFunction.formatDate(new Date()),
    type: "text",
    isMe: false,
    data: {
        text: "Hi, welcome to chat window pro"
    },
},
{
    sender: "Me",
    timestamp: genericFunction.formatDate(new Date()),
    type: "text",
    isMe: true,
    data: {
        text: "I need help"
    },
},
{
    sender: "Bot",
    timestamp: genericFunction.formatDate(new Date()),
    type: "quickreplies",
    isMe: false,
    data: {
        text: "Sure, I can help you with below list."
    },
    isClicked: false,
    quickReplies: [
        {
            title: 'Buy',
            response: 'buy'
        },
        {
            title: 'Sell',
            response: 'Sell'
        },
        {
            title: 'Hold',
            response: 'I want to hold'
        },
        {
            title: 'Add to cart',
            response: 'add to cart'
        },
        {
            title: 'Go to cart',
            response: 'Go to cart'
        },
    ]
}

];

module.exports = { sampleData, botResponses }