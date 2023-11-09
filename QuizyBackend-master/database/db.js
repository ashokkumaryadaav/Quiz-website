const dotenv=require("dotenv");
const mongoose = require('mongoose')
dotenv.config();
function connectDb() 
{

    mongoose.Promise = global.Promise
    //mongoose.connect(process.env.URL);
    mongoose.connect('mongodb://localhost:27017/quiz');
    const con = mongoose.connection
    con.on('open', () => {
        console.log("database connected in mongo atlas (#cloud)");
    })
}

module.exports = connectDb