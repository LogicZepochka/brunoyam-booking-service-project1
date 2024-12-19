const { validationResult } = require("express-validator");
const apiAnswer = require("../tools/APIAnswers");
const Room = require("../models/room");
const UserDTO = require("../dto/userDTO");

function FilterRooms(query) {
    var searchParams = {};
    if(query.query) {
        searchParams.title = {
            '$regex': query.query,
            '$options': 'i'
        }
    }
    if(query.type) {
        searchParams.type = query.type;
    }
    searchParams.costPerMonth = {
        $gt: query.minPrice || 0,
        $lt: query.maxPrice || Number.MAX_VALUE
    }

    return searchParams;
}

module.exports = new class RoomController {
    
    async GetRoom(req,res) {
        const errors = validationResult(req).errors;
        if(errors.length > 0) {
            return res.status(400).json(apiAnswer.INVALID_DATA(errors));
        }

        if(!req.query.id) {
            try {
                let rooms = await Room.find(FilterRooms(req.query)/*{public: false}*/,null,{skip:0+5*req.query.chunk,limit: 5}).populate("createdBy");
                for(let room of rooms) {
                    room.createdBy = new UserDTO(room.createdBy);
                }
                return res.status(200).json(apiAnswer.createAnswer(rooms));
            }
            catch(e) {
                console.log('error','\t',e);
                res.status(404).json(apiAnswer.NOT_FOUND);
            }
        }
        else {
            try {
                let room = await Room.findById(req.query.id).populate("createdBy");
                room.createdBy = new UserDTO(room.createdBy);
                if(!room) return res.status(200).json(apiAnswer.NOT_FOUND);
                res.status(200).json(apiAnswer.createAnswer(room));
            }
            catch(e) {
                console.log('error','\t',e.message);
                res.status(400).json(apiAnswer.INVALID_DATA());
            }
        }
    }

    async CreateRoom(req,res) {
        try {
        const errors = validationResult(req).errors;
        if(errors.length > 0) {
            return res.status(400).json(apiAnswer.INVALID_DATA(errors));
        }
        let room = await Room.create({
            title: req.body.title,
            address: req.body.address,
            images: [],
            square: req.body.square,
            costPerMonth: req.body.costPerMonth,
            createdBy: req.user._id,
            description: req.body.description,
            type: req.body.type
        });
        await room.save();
        res.status(200).json(apiAnswer.createAnswer({
            room_id: room._id
        }));
        }
        catch(e) {
            console.log('express','\t',e.message);
            res.sendStatus(500);
        }
    }

}