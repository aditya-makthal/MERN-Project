import React, { useEffect, useState } from 'react';
import DropDownMenu from "./DropDownMenu.js";
import axios from "axios";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);
  const [option, setOption] = useState("");
  const [value, setValue] = useState("");
  const baseUrl = 'http://localhost:3001/getStudents/';
  const dynamicUrl = `${baseUrl}${option}/${value}`;

  useEffect(() => {
    console.log(dynamicUrl);
    axios.get(dynamicUrl)
      .then(response => setStudents(response.data))
      .catch(error => console.log(error));
  }, [option, value]);

  const handleSubmit = (selectedOption, inputValue) => {
    setOption(selectedOption);
    setValue(inputValue);
    console.log('Selected Option:', selectedOption);
    console.log('Input Value:', inputValue);
  };

  return (
    <>
      <h1>Get student details of top colleges in Hyderabad</h1>
      <DropDownMenu handleSubmit={handleSubmit} />
      <div className="App">
        <div className="Table">
          {students.length === 0 ? (
            <p>No data found</p>
          ) : (
            <table className='table'>
              <thead>
                <tr>
                  <th>Roll No</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>College</th>
                  <th>Department</th>
                  <th>Marks</th>
                  <th>Mobile</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {students.map(student => (
                  <tr key={student.email}>
                    <td>{student.rollno}</td>
                    <td>{student.name}</td>
                    <td>{student.age}</td>
                    <td>{student.college}</td>
                    <td>{student.dept}</td>
                    <td>{student.marks}</td>
                    <td>{student.mobile}</td>
                    <td>{student.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
