const responseTypes = require("./responseTypes");
const genericFunction = require("../utils/genericFunction");
const shortUID = require('short-uuid')();
const moment = require('moment');

const sorryMessages = [
    "Sorry, I didn't get you",
    "Ohh... I could't understand your request. Sorry!",
    "I'm sorry, I didn't understand that"
];

function getBotResponseTemplate() {
    return {
        conversationId: "",
        transactionId: "",
        sender: "Bot",
        timestamp: "",
        type: "",
        text: "",
        followText: []
    }
}

function generateBotResponse(obj) {
    if (!obj) {
        obj = {
            type: responseTypes.plainText,
            text: sorryMessages[genericFunction.generateRandomNo(0, sorryMessages.length - 1)]
        }
    }
    let botResponse = getBotResponseTemplate();
    const date = new Date();
    const ts = moment(date).format("YYYYMMDDHHmmssSSS");
    
    botResponse.transactionId = ts + shortUID.new();
    botResponse.timestamp = genericFunction.formatDate(date);
    botResponse.type = obj.type ? obj.type : responseTypes.plainText;
    botResponse.text = obj.text ? obj.text : "";
    botResponse.followText = obj.followText ? obj.followText : [];

    console.log(botResponse);
    return botResponse;
}

module.exports = generateBotResponse;