const responseTypes = require("./responseTypes");
const genericFunction = require("../utils/genericFunction");

const sorryMessages = [
    "Sorry, I didn't get you",
    "Ohh... I could't understand your request. Sorry!",
    "I'm sorry, I didn't understand that"
];

function generateBotResponse(obj) {
    if (!obj) {
        obj = {
            type: responseTypes.plainText,
            text: sorryMessages[genericFunction.generateRandomNo(0, sorryMessages.length - 1)]
        }
    }
    
    let res =  {
        sender: "Bot",
        timestamp: genericFunction.formatDate(new Date()),
        type: obj.type ? obj.type : responseTypes.plainText,
        text: obj.text ? obj.text : "",
        followText: obj.followText ? obj.followText : []
    }
    return res;
}

module.exports = generateBotResponse;