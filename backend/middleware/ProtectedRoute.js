const User = require("../models/User");
const apiAnswer = require("../tools/APIAnswers");
const JWTTools = require("../tools/jwtTools");


module.exports = async function ProtectedRoute(req,res,next) {
    try {
        console.log('protectedroute','\t','trying to get acces to protected route')
        if(!req.headers['authorization']) {
            res.status(401).json(apiAnswer.UNAUTHORIZED);
            console.log('protectedroute','\t','bearer header not found')
            return;
        }
        let bearer = req.headers['authorization'];
        let token = bearer.split(' ')[1];
        let userData = await JWTTools.verifyToken(token);
        if(!userData) {
            console.log('protectedroute','\t','wrong or expired token')
            res.status(401).json(apiAnswer.UNAUTHORIZED);
            return;
        }
        let user = await User.findById(userData._id);
        if(!user) {
            console.log('protectedroute','\t','user in token not exist')
            res.status(401).json(apiAnswer.UNAUTHORIZED);
            return;
        }
        req.user = user;
        console.log('protectedroute','\t',`access granted for ${user.name} (${user._id})`)
        next();
    }
    catch(e) {
        console.log('protectedroute','\t','error: ',e.message)
        res.status(400).json(apiAnswer.UNAUTHORIZED);
    }
}