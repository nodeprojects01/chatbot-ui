const uid = require("./uniqueId");

function createConversationId() {
    // Save data to sessionStorage
    sessionStorage.setItem('convId', uid.createNewUniqueId());
}

function getConversationId() {
    // Get saved data from sessionStorage
    let data = sessionStorage.getItem('convId');
    console.log(data);
    return data;
}

function createTransactionId() {
    return uid.createNewUniqueId();
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
    removeSessionId,
    clearSession
}