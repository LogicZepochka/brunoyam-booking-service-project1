const crypto = require("node:crypto")

const GenerateCode = () => {
    return String(Math.floor(100000 + Math.random() * 900000));
}

const GenerateResetKeyCode = (user) => {
    let stringToHash =
        `${user.name}-${(new Date()).getTime()}`
    let hashed = crypto.createHash('md5').update(stringToHash).digest('hex').toString();
    return hashed;
}

module.exports = { GenerateCode, GenerateResetKeyCode }