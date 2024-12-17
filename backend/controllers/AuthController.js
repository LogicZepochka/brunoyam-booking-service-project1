const crypto = require('node:crypto')
const { validationResult } = require("express-validator");
const apiAnswer = require('../tools/APIAnswers');
const User = require('../models/User');
const JWTTools = require('../tools/jwtTools');
const UserDTO = require('../dto/userDTO');
const PasswordReset = require('../models/passwordReset');
const { GenerateCode, GenerateResetKeyCode } = require('../tools/Generators');


function hashPassword(password) {
    let hashed = crypto.createHash('md5').update(password).digest('hex').toString();
    return hashed;
}

module.exports = new class AuthController {
    
    async LogIn(req,res) {
        const errors = validationResult(req).errors;
        if(errors.length > 0) {
            return res.status(400).json(apiAnswer.INVALID_DATA(errors));
        }
        let password = hashPassword(req.body.password);
        
        let user = await User.findOne({email: req.body.email, password: password})
        if(user == null) {
            return res.status(404).json(apiAnswer.WRONG_CREDS);
        }
        else {
            let access = JWTTools.createJWTForUser(user);
            return res.status(200).json(
                apiAnswer.createAnswer({
                    user: new UserDTO(user),
                    tokens: access
                })
            )
        }
    }

    async Register(req,res) {
        const errors = validationResult(req).errors;
        if(errors.length > 0) {
            return res.status(400).json(apiAnswer.INVALID_DATA(errors));
        }
        let password = hashPassword(req.body.password);
        let user = await User.create(
            {
                name: req.body.name,
                password: password,
                email: req.body.email,
                phone: req.body.phone
            }
        )
        await user.save();
        return res.status(200).json(apiAnswer.OK);
    }

    async RequestReset(req,res) {
        const errors = validationResult(req).errors;
        if(errors.length > 0) {
            return res.status(400).json(apiAnswer.INVALID_DATA(errors));
        }
        let user = await User.findOne({email: req.query.email});
        let ip = req.headers['cf-connecting-ip'] || req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        if(user) {
            let code = GenerateCode();
            let passRest = await PasswordReset.create({
                target_user: user,
                code: code,
                key: GenerateResetKeyCode(user),
                ip: ip
            });
            await passRest.save();
        }
        return res.status(200).json(apiAnswer.OK);
    }

    async RequestPin(req,res) {
        const errors = validationResult(req).errors;
        if(errors.length > 0) {
            return res.status(400).json(apiAnswer.INVALID_DATA(errors));
        }
        let reset = await PasswordReset.findOne({code: req.query.pin});
        if(!reset) {
            return res.status(404).json(apiAnswer.WRONG_PIN);
        }
        else {
            if(reset.expiredIn < (new Date().getTime())) {
                return res.status(404).json(apiAnswer.EXPIRED);
            }
            return res.status(200).json(
                apiAnswer.createAnswer({
                    key: reset.key
                })
            );
        }
    }

    async RequestChangePassword(req,res) {
        const errors = validationResult(req).errors;
        if(errors.length > 0) {
            return res.status(400).json(apiAnswer.INVALID_DATA(errors));
        }

        let reset = await PasswordReset.findOne({key: req.body.key});
        if(!reset) {
            return res.status(400).json(apiAnswer.INVALID_DATA());
        }
        if(reset.expiredIn < (new Date().getTime())) {
            return res.status(404).json(apiAnswer.EXPIRED);
        }
        let user = await User.findOne({_id: reset.target_user});
        if(!user) {
            return res.status(400).json(apiAnswer.INVALID_DATA());
        }
        user.password = hashPassword(req.body.password);
        reset.finished = true;
        await user.save();
        await reset.save();
        return res.status(200).json(apiAnswer.OK);
    }
}