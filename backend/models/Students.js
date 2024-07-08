const mongoose = require('mongoose');

const StudentsSchema= new mongoose.Schema({
    id:Number,
    name:String,
    addre:String, 
    stream:String,
    year:Number
});

const StudentsModel= mongoose.model("students", StudentsSchema);
module.exports = StudentsModel;