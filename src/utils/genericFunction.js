

function formatDate(date) {
    const h = "0" + date.getHours();
    const m = "0" + date.getMinutes();

    return `${h.slice(-2)}:${m.slice(-2)}`;
}


function generateRandomNo(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


module.exports = { formatDate, generateRandomNo }