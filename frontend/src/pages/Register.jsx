import React, { useState } from "react";
import { useAuth } from "../contexts/useAuth";
import { Link } from "react-router-dom";

function Register() {
  const { register } = useAuth();
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await register(form.username, form.email, form.password);
      console.log("Registration Done");
      // Optionally, redirect or show success message
    } catch (err) {
      console.log(err);
      setError("Registration failed.");
    }
  };

  return (
    <div className="relative bg-gray-100 flex items-center justify-center !min-h-screen  !pt-40 !pb-50 font-sans">
            {/* Main Card Container */}
            <div className="bg-white !p-8 rounded-2xl shadow-xl w-full !max-w-md">
                
                {/* Form Header */}
                <div className="text-center !mb-6">
                    <h1 className="text-3xl font-bold text-gray-800">Create an Account</h1>
                    <p className="text-gray-500 !mt-2">Join us today to get started!</p>
                </div>

                {/* Registration Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Username Input Field */}
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700 !mt-3">Username</label>
                        <input 
                            type="text" 
                            id="username" 
                            name="username" 
                            value={form.username}
                            onChange={handleChange}
                            placeholder="Enter your username"
                            className="w-full !px-4 !py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                            required
                        />
                    </div>
                    
                    {/* Email Input Field */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 !mt-3">Email</label>
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
                            className="w-full !px-4 !py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 "
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
                            Register
                        </button>
                    </div>
                </form>

                {/* "Already have an account?" link */}
                <div className="!mt-6 text-center">
                    <p className="text-sm text-gray-500">
                        Already have an account? 
                        <Link to="/login" className="font-medium text-blue-600 hover:text-blue-700 hover:underline transition duration-200">Log in here</Link>
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Register;
