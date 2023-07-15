import React, { useState } from 'react';
import './DropdownMenu.css'; // Assuming the CSS file is named "DropdownMenu.css"

const DropdownMenu = (para) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit1 = () => {
    console.log("clicked s1");
    para.handleSubmit(selectedOption, inputValue);
  };

  return (
    <div className="dropdown-container">
      <label className="label" htmlFor="dropdown">Filter Students by :</label>
      <select className="select" id="dropdown" value={selectedOption} onChange={handleOptionChange}>
        <option value="">Your Options</option>
        <option value="rollno">Roll No</option>
        <option value="college">College</option>
        <option value="dept">Dept</option>
      </select>
      <p>Give me the {selectedOption} :</p>
      <input className="input" type="text" value={inputValue} onChange={handleInputChange} />
      <p className="result">Searching for {selectedOption}: {inputValue}</p>
      <button className="button" onClick={handleSubmit1}>Submit</button>
    </div>
  );
};

export default DropdownMenu;
