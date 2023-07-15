const mongoose = require("mongoose")

const StudentSchema = new mongoose.Schema({
    rollno : Number,
    name : String,
    age : Number,
    college : String,
    dept : String,
    marks : Number,
    mobile : String,
    email : String
})

const StudentModel = mongoose.model('studentdetails', StudentSchema);
module.exports = StudentModel;