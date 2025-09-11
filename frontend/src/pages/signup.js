import React, { useState } from "react";
import { handleError } from "../until";

export default function SignupForm() {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    confromPassword: "",
    mobile_Number: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Submit form
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
    const response = await fetch("http://localhost:5000/any/api/any/signup", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json" // backend ko batata hai ki data JSON format me hai
      },
      body: JSON.stringify(formData) // object ko JSON me convert karna
    });

    const data = await response.json(); // backend ka response JSON me convert
    
  } catch (err) {
    return handleError('Something is missing')
  }
};
 

  // Clear form
  const handleClear = () => {
    setFormData({
      name: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
      confromPassword: "",
      mobile_Number: "",
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>

        {/* First Name */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">First Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter first name"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Last Name */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Last Name</label>
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            placeholder="Enter last name"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Username */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter username"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Confirm Password</label>
          <input
            type="password"
            name="confromPassword"
            value={formData.confromPassword}
            onChange={handleChange}
            placeholder="Re-enter password"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Mobile Number */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-1">Mobile Number</label>
          <input
            type="tel"
            name="mobile_Number"
            value={formData.mobile_Number}
            onChange={handleChange}
            placeholder="Enter mobile number"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-xl hover:bg-blue-600 transition"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="bg-gray-400 text-white px-6 py-2 rounded-xl hover:bg-gray-500 transition"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}
