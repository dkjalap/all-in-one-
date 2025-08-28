import React, { useState } from "react";
//import {Router,Route} from "react-router-dom";

import Signup from "./signup";



export default function LoginPage() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
const [page,setpage] = useState();
  

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Login button
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login with:", formData);
    //alert(`Logging in as ${formData.username}`);
  };

  // Signup button
  const handleSignup = (e) => {
    setpage("signup")
    console.log("Signup with:", page);
    //alert(`Signing up with username: ${formData.username}`);
  };

  // Clear button
  const handleClear = () => {
    setFormData({ username: "", password: "" });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Authentication</h2>

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

        {/* Password */}
        <div className="mb-6">
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

        {/* Buttons */}
        <div className="flex justify-between">
          <button
            type="button"
            onClick={handleLogin}
            className="bg-blue-500 text-white px-5 py-2 rounded-xl hover:bg-blue-600 transition"
          >
            Login
          </button>
          <button
            type="button"
            onClick={handleSignup}
            className="bg-green-500 text-white px-5 py-2 rounded-xl hover:bg-green-600 transition"
          >
            Signup
          </button>
          
          <button
            type="button"
            onClick={handleClear}
            className="bg-gray-400 text-white px-5 py-2 rounded-xl hover:bg-gray-500 transition"
          >
            Clear
          </button>
        
        </div>

      </form>
      {page === "signup" && <Signup />}
    </div>
    
  );
}
