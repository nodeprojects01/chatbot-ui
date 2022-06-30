const responseTypes = require("./responseTypes");
const genericFunction = require("../utils/genericFunction");
const shortUID = require('short-uuid')();
const moment = require('moment');

const sorryMessages = [
    "Sorry, I didn't get you",
    "Ohh... I could't understand your request. Sorry!",
    "I'm sorry, I didn't understand that",
    "Excuse me, could you repeat what you said?",
    "I'm sorry, I don't understand. Could you say it again?",
    "I'm sorry, I didn't catch that. Would you mind rephrasing?",
    "I'm confused. Could you tell me again?"
];

function getBotResponseTemplate() {
    return {
        userId: "",
        conversationId: "",
        transactionId: "",
        sender: "Bot",
        timestamp: "",
        messageType: "",
        message: "",
        followMessage: []
    }
}

function generateBotResponse(obj) {
    if (!obj.botResponse) {
        obj = {
            messageType: responseTypes.plainText,
            message: sorryMessages[genericFunction.generateRandomNo(0, sorryMessages.length - 1)]
        }
    }
    let botResponse = getBotResponseTemplate();
    const date = new Date();
    const ts = moment(date).format("YYYYMMDDHHmmssSSS");

    botResponse.userId = obj.userId
    botResponse.conversationId = obj.convId
    botResponse.transactionId = obj.transId
    botResponse.timestamp = genericFunction.formatDate(date);
    botResponse.messageType = obj.botResponse.messageType ? obj.botResponse.messageType : responseTypes.plainText;
    botResponse.message = obj.botResponse.message ? obj.botResponse.message : "";
    botResponse.followMessage = obj.botResponse.followMessage ? obj.botResponse.followMessage : [];

    console.log(botResponse);
    return botResponse;
}

module.exports = generateBotResponse;