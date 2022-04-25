const crypto = require("crypto");

function createNewUniqueId() {
    return crypto.randomBytes(16).toString("hex");
}

module.exports = { createNewUniqueId };
