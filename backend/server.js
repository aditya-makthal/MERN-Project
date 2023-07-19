const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const StudentModel = require('./Students')

const app = express()
app.use(cors({origin:["*"]}))
app.use(express.json())

mongoose.connect("mongodb+srv://projectuser:projectpassword@cluster0.qx2ctcj.mongodb.net/CollegeDetails")

app.get('/',(req,res)=>{
  console.log("Default route invoked")
})

app.get('/getStudents/:option/:value', (req, res)=>{
  const opt = req.params.option;
  const value = req.params.value;
  StudentModel.find({[opt]:value})
  .then(students => res.json(students))
  .catch(err => res.json(err))
})

app.listen(3001, ()=>{
  console.log("Server is running on port 3001");
})