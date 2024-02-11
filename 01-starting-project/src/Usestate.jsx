import React, { useState } from 'react';

const Usestate = () => {
  // Define state variables for form fields
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  // Handle input change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // You can access form data in formData object
    console.log('Form submitted:', formData);
    alert(JSON.stringify(formData)); // Convert to string for alert
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleInputChange}
        placeholder="Username"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Email"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        placeholder="Password"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Usestate;
