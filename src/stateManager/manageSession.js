const uid = require("./uniqueId");

function createConversationId() {
    // Save data to sessionStorage
    sessionStorage.setItem('convId', uid.createUniqueId());
}

function getConversationId() {
    // Get saved data from sessionStorage
    let cid = sessionStorage.getItem('convId');
    console.log("Conv Id -", cid);
    return cid;
}

function createTransactionId() {
    const tid = uid.createUniqueId();
    console.log("Trans Id -", tid);
    return tid;
}

function cachePreviousState(data) {
    if (typeof data === 'object') {
        if (getConversationId() === data.convId) {
            let prevData = {};
            prevData.userId = data.userId
            prevData.transId = data.transId
            prevData.convId = data.convId
            prevData.previousIntentSummary = data.previousIntentSummary
            prevData.sessionAttributes = data.sessionAttributes
            data = JSON.stringify(prevData);
            sessionStorage.setItem('previousState', data);
        }
        else {
            console.log("manageSession.js > cachePreviousState - conversation id missmatch");
            throw Error("conversation id missmatch")
        }
    }
}

function getPreviousState(data) {
    const ps = sessionStorage.getItem('previousState', data);
    return JSON.parse(ps);
}

function removeSessionId(key) {
    // Remove saved data from sessionStorage
    sessionStorage.removeItem(key);
}

function clearSession() {
    // Remove all saved data from sessionStorage
    sessionStorage.clear();
}


module.exports = {
    createConversationId,
    getConversationId,
    createTransactionId,
    cachePreviousState,
    getPreviousState,
    removeSessionId,
    clearSession
}