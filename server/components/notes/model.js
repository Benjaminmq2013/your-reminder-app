const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const mySchema = new Schema({
    title: String,
    description: {
        type:String,
        required: true,
    },    
})

const model = mongoose.model("Note", mySchema);
module.exports = model;