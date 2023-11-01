//Importing the detail of the models
const userModel = require("../models/user");
const mongoose = require("mongoose");

//Function getData, it has to be imported on the routes folder

/**G E T  D A T A */
exports.getData = (req, res) => {
    userModel.find({}).then(console.log("Data retrieved from MongoDB"));
    /**Para usar paginación */
    const options = {
        page: 1,
        limit: 50
    };
    userModel.paginate({}, options).then(doc =>  res.send(doc) );
};


/**I N S E R T  D A T A */
/**takes what comes from req.body
 * res.send: Answers what comes from data
 */
exports.insertData = async (req, res) => {
    const data = req.body;
    let error;
try{
    await userModel.create(data).then(result => res.send(result));
    //res.send({data})
}
catch (err) {
    let error = {};
    console.log("Error text", err.message);
    console.log("Error Code:", err.code);
    return res.status(500).json(err.message);

    }    
};

/**U P D A T E  D A T A */
exports.updateSingle = (req, res) => {
    try{
        id = req.params.id;
        console.log("Id: ", id);
        userModel.updateOne({_id: id}, {$set: req.body }).exec();
        res.send(req.body);
    } catch(err){
        console.log("Error text", err.message);
        return res.status(err.code).json(err.message);
    }
};

/**D E L E T E  D A T A */
exports.deleteSingle = (req, res) => {
    try{
        id = req.params.id;
        console.log("Id: ", id);
        userModel.deleteOne({_id: id}).then(result => res.send(result));
    } catch(err){
        console.log("Error text", err.message);
        return res.status(err.code).json(err.message);
    }
};