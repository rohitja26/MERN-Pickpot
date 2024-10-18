import React, { useState } from "react";
import "./SignUp.css";
import ThemeToggle from "../components/ThemeToggle";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = "Invalid email format";
    if (formData.password.length < 8)
      newErrors.password = "Password must be at least 8 characters long";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      // Submit form logic here
    }
  };

  return (
    <div className="signup-container">
      <div className="heading-wrapper">
        <h2>Sign Up</h2>
        <ThemeToggle />
      </div>
      <form onSubmit={handleSubmit} className="form-container">
        <div>
          <label className="input-name">Name</label>
          <div>
            {errors.name && <span>{errors.name}</span>}
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <label className="input-name">Email</label>
          {errors.email && <span>{errors.email}</span>}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="input-name">Password</label>
          {errors.password && <span>{errors.password}</span>}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="input-name">Confirm Password</label>
          {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="register-btn">
          Register
        </button>
      </form>
    </div>
  );
};

export default SignUp;
