import React from "react";

const Form = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-gradient-to-r from-white to-gray-100 px-4">
      <div className="bg-white p-10 rounded-lg shadow-2xl w-full max-w-lg">
        <h2 className="text-black text-4xl font-semibold mb-8 text-center">
          User Form
        </h2>
        <form className="space-y-8">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 text-xl font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full p-4 rounded-lg bg-gray-50 text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            />
          </div>

          {/* URL Field */}
          <div>
            <label
              htmlFor="url"
              className="block text-gray-700 text-xl font-medium mb-2"
            >
              URL
            </label>
            <input
              type="url"
              id="url"
              placeholder="Enter your URL"
              className="w-full p-4 rounded-lg bg-gray-50 text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 bg-blue-600 text-white font-semibold text-lg rounded-lg hover:bg-blue-700 transition duration-200 ease-in-out transform hover:scale-105"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
