require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require("mongoose");
const AuthRouter = require('./routers/AuthRouter');
const UserRouter = require('./routers/UserRouter');

const PORT = process.env.EXPRESS_PORT || "3306";
if(!process.env.DB_CONNECTION_STRING) {
    console.error('error:',"MongoDB сonnection string not specified in .env file.");
    process.exit(-1);
}

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/auth',AuthRouter);
app.use('/profile',UserRouter);


mongoose.connect(process.env.DB_CONNECTION_STRING).then(() => {
    console.log("mongoose:",'\t',"DataBase connected")
    app.listen(PORT,() => {
        console.log('express:','\t',`Server started at port`,PORT);
    });
}).catch((e) => {
    console.error('mongoose',e);
})
