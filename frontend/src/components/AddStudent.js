import React, { useState } from 'react';
import '../css/AddStudent.css';

const refresh = () => window.location.reload(true);

const RegistrationForm = ({ formData, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your username"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />
      </div>
      <button type="submit" onClick={refresh}>Register</button>
    </form>
  );
};

const AddStudent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendDataToBackend(formData);
  };

  const sendDataToBackend = (data) => {
    fetch('http://localhost:8080/v1/addStudent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log('Response from server:', responseData);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="container">
      <h1 align="center">Registration</h1>
      <RegistrationForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default AddStudent;


//export const App = () => {
//     const refresh = () => window.location.reload(true)

//     return (
//         <button onClick={refresh}>Refresh</button>
//     )
// }