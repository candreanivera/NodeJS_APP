const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

//To create users Scheme
const UserScheme = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        ID: {
            type:Number,
            required:true,
            unique:true
        },
        email: {
            type: String,
            unique: false,
            required: true
        }
    },
{
    versionKey: false,
    //stores creation and last modification date by default
    timestamps: true
}
)

//mongoose-paginate will be in charge of pagination 
UserScheme.plugin(mongoosePaginate);

//Exporting
//The schema name will be user, and the structure is the one defined on UserScheme
module.exports = mongoose.model('user', UserScheme);