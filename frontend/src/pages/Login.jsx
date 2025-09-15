// src/components/Login.js
import React, { useState } from "react";
import { useAuth } from "../contexts/useAuth";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  const { login } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(form.email, form.password);
      navigate("/")
    } catch (error) {
        console.log(error)
      setError("Login failed. Check your credentials.");
    }
  };

  return (
    <div className="relative z-20 bg-gray-100 flex items-center justify-center !min-h-screen !pt-50 !pb-50 font-sans">
            {/* Main Card Container */}
            <div className="bg-white !p-8 rounded-2xl shadow-xl w-100 max-w-md">
                
                {/* Form Header */}
                <div className="text-center !mb-6">
                    <h1 className="text-3xl font-bold text-gray-800">Login to your Account</h1>
                </div>

                {/* Login Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Email Input Field */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-3">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={form.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            className="w-full !px-4 !py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                            required
                        />
                    </div>
                    
                    {/* Password Input Field */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 !mt-3">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            value={form.password}
                            onChange={handleChange}
                            placeholder="Must be at least 8 characters"
                            className="w-full !px-4 !py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                            required
                            />
                    </div>
                            {error && (
                              <div
                                className="!mb-4 text-center font-semibold"
                                style={{ color: "#EBD6FB" }}
                              >
                                {error}
                              </div>
                            )}
                    
                    {/* Submit Button */}
                    <div>
                        <button 
                            type="submit" 
                            className="w-full bg-blue-600 !text-white !py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 !mt-5"
                        >
                            Login
                        </button>
                    </div>
                </form>

                {/* "Already have an account?" link */}
                <div className="!mt-6 text-center">
                    <p className="text-sm text-gray-500">
                        Don't have an account? 
                        <Link to="/signup" className="font-medium text-blue-600 hover:text-blue-700 hover:underline transition duration-200">Register here</Link>
                    </p>
                </div>
            </div>
        </div>
  );
}

export default Login;
