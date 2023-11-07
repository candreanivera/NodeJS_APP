const express = require("express")
const initDB = require("./config/db")
const bodyParser = require("body-parser");
const dotenv = require('dotenv'); //.env file
dotenv.config();
const {PORT} = process.env;
const path = require("path");

//Instantiation of app 
const app = express();

const publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

console.log(__dirname);
console.log(publicPath);

//To import the routes
const userRouters = require('./app/routes/user');
const itemRouters = require('./app/routes/items');
const itemUpload = require('./app/routes/upload');

//to parse json - 20mb limit per request
app.use(
    bodyParser.json({
        limit: '20mb'
    })
)

//converts characters to a streamable format if they come with form-urlencoded headers
app.use(
    bodyParser.urlencoded({
        limit: '20mb',
        extended: true
    })
)

//Root path
//req: input data
//res: used to responde
app.get('/', (req, res) => {
    res.send('Initial Endpoint for root path')
})

/**Controllers for users, items and Upload Files */
app.use(userRouters);
app.use(itemRouters);
app.use(itemUpload);


//Port where the app is running
app.listen(PORT, () => {
    console.log('App running on port:'+PORT);
})

//initDB is called to execute the connection
initDB();