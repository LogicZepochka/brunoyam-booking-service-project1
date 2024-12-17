const User = require('../models/User');
const jwt = require('jsonwebtoken');

require('dotenv').config();
const jwtSecretKey = process.env.JWT_SECRET;
if(!jwtSecretKey) {
    console.error("jwtokens",'\t','JWT secret key is not found in ".env" file!')
    process.exit(-1);
}

function generateRefreshToken(user) {
    //TODO
}  

function generateAccessToken(user) {
    let payload = {
        _id: user._id,
        name: user.name,
    };
    let token = jwt.sign(payload,jwtSecretKey,{
        expiresIn: '2h'
    });
    return token;
}

const JWTTools = new class {
    
    createJWTForUser(user) {
        let accessToken = generateAccessToken(user);

        return {
            accessToken: accessToken
        }
    }

    async verifyToken(token) {
        try {
            let decoded = jwt.verify(token,jwtSecretKey);
            return decoded;
        }  
        catch {
            return null;
        }
    }
}

module.exports = JWTTools;