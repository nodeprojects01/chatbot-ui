const crypto = require("crypto");

function createUniqueId() {
    return crypto.randomBytes(16).toString("hex");
}

module.exports = { createUniqueId };
