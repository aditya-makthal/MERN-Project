const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const StudentModel = require('./Students')

const app = express()
app.use(express.json())
app.use(cors({
  origin : ["*"],
  methods: ["POST","GET"],
  credentials: true
}))
mongoose.connect("mongodb+srv://projectuser:projectpassword@cluster0.qx2ctcj.mongodb.net/CollegeDetails")

app.get('/', (req, res) => {
  res.send("Default route invoked");
});

app.get('/getStudents/:option/:value', (req, res) => {
  const opt = req.params.option;
  const value = req.params.value;
  StudentModel.find({ [opt]: value })
    .then(students => res.json(students))
    .catch(err => res.status(500).json({ error: "An error occurred while fetching students." }));
});

app.listen(3001, ()=>{
  console.log("Server is running on port 3001");
})