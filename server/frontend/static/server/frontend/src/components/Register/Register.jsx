import React, { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registration form submitted!");
  };

  return (
    <div className="container mt-5">
      <h2>Sign-up</h2>

      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          className="form-control"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <label>First Name</label>
        <input
          className="form-control"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
          required
        />

        <label>Last Name</label>
        <input
          className="form-control"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          className="form-control"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Password</label>
        <input
          className="form-control"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <br />

        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
