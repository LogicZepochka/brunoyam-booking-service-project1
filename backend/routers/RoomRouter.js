const express = require('express');
const ProtectedRoute = require('../middleware/ProtectedRoute');
const { roomRegisterValidator, roomSearchFilter } = require('../validations/room.validator');
const RoomController = require('../controllers/RoomController');
const RoomRouter = express.Router();

RoomRouter.get('/get',roomSearchFilter,RoomController.GetRoom)

RoomRouter.post('/create',ProtectedRoute,roomRegisterValidator,RoomController.CreateRoom);

module.exports = RoomRouter;