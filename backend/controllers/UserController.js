const { validationResult } = require("express-validator");
const UserDTO = require("../dto/userDTO");
const User = require("../models/User");
const apiAnswer = require("../tools/APIAnswers");
const Room = require("../models/room");


module.exports = new class UserController {
    
    async GetProfileInfo(req,res) {
        try {
            const errors = validationResult(req).errors;
            if(errors.length > 0) {
                return res.status(400).json(apiAnswer.INVALID_DATA(errors));
            }
            var user = await User.findOne({_id: req.query.id});
            if(!user) {
                return res.status(404).json(apiAnswer.NOT_FOUND);
            }
            var rooms = [];
            if(req.query.loadRooms) {
                var rooms = await Room.find({creatorId: user._id});
                console.log(rooms);
            }

            return res.status(200).json(apiAnswer.createAnswer({
                user: new UserDTO(user),
                rooms: rooms
            }));
        }
        catch(e) {
            console.log("[ERROR]",'\t',e.message);
            return res.status(400).json(apiAnswer.INVALID_DATA());
        }
    }

}