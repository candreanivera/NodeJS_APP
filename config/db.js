//mongoose is used to connect to the mongoDB non relational database
const mongoose = require('mongoose');
//Top use the .env file
const dotenv = require('dotenv'); 
dotenv.config();
const {PASSWORD, USER, CLUSTER} = process.env;
const DB_URI = 'mongodb+srv://'+USER+':'+PASSWORD+CLUSTER+'.kwdxdyu.mongodb.net/?retryWrites=true&w=majority';

//To export everything that is inside module.exports
module.exports = () => {
    //Function that will assist connection
    const connect = () => {
        mongoose.connect(DB_URI, { 
                serverApi: {
                    version: '1',
                    strict: true,
                    deprecationErrors: true
                }
            }
            )
            console.log("Successful connection to MongoDB");
    }

    console.log("Calling the connect function");
    connect();
}