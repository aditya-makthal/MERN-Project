// app.js (main file)
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const StudentModel = require('./Students');

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb+srv://projectuser:projectpassword@cluster0.qx2ctcj.mongodb.net/CollegeDetails", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });

app.get('/', (req, res) => {
  res.send("API root route invoked");
});

app.get('/getStudents/:option/:value', (req, res) => {
  const opt = req.params.option;
  const value = req.params.value;
  // Here, you can add validation to ensure 'opt' is a valid property in the StudentModel schema.

  StudentModel.find({ [opt]: value })
    .then((students) => {
      if (students.length === 0) {
        return res.status(404).json({ error: "No students found with the given criteria." });
      }
      res.json(students);
    })
    .catch((err) => {
      console.error("Error fetching students:", err);
      res.status(500).json({ error: "An error occurred while fetching students." });
    });
});

// 404 Route: This will handle all other routes that are not defined.
app.use((req, res) => {
  res.status(404).json({ error: "Not found." });
});

app.listen(PORT, () => {
  console.log("Server listening on Port", PORT);
});
