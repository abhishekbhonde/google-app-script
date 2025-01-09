import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import {db} from "./firebase" // Import your Firebase configuration

const Login = () => {
  // State for email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle form submission
  const handleSubmit = async (e:any) => {
    e.preventDefault(); // Prevent page reload

    try {
      // Add email and password to Firestore
      const docRef = await addDoc(collection(db, "users"), {
        email,
        password,
      });
      console.log("User added with ID: ", docRef.id);
      alert("User logged in successfully!");

      // Clear form fields
      setEmail("");
      setPassword("");
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("Error logging in. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gradient-to-r from-white to-gray-100 px-4">
      <div className="bg-white p-10 rounded-lg shadow-2xl w-full max-w-lg">
        <h2 className="text-black text-4xl font-semibold mb-8 text-center">
          Login
        </h2>
        <form className="space-y-8" onSubmit={handleSubmit}>
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 text-xl font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 rounded-lg bg-gray-50 text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 text-xl font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 rounded-lg bg-gray-50 text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 bg-blue-600 text-white font-semibold text-lg rounded-lg hover:bg-blue-700 transition duration-200 ease-in-out transform hover:scale-105"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
