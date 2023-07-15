import React, { useEffect, useState } from 'react';

const StudentList = ({ collection }) => {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/${collection}/students`);
        if (!response.ok) {
          throw new Error(`Error retrieving ${collection} student data`);
        }
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [collection]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (students.length === 0) {
    return <div>No students found</div>;
  }

  return (
    <div>
      <h1>Student List - {collection}</h1>
      <ul>
        {students.map(student => (
          <li key={student._id}>
            <h3>{student.name}</h3>
            <p>Roll No: {student.rollno}</p>
            <p>Department: {student.dept}</p>
            <p>Marks: {student.marks}</p>
            <p>Phone: {student.phone}</p>
            <p>Email: {student.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
