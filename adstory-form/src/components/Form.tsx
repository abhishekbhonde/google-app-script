import React from "react";

const Form = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-black px-4">
      <div className="bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-lg">
        <h2 className="text-white text-3xl font-bold mb-6 text-center">
          User Form
        </h2>
        <form className="space-y-6">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-gray-300 text-lg font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full p-4 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-4 focus:ring-blue-500"
            />
          </div>

          {/* URL Field */}
          <div>
            <label
              htmlFor="url"
              className="block text-gray-300 text-lg font-medium mb-2"
            >
              URL
            </label>
            <input
              type="url"
              id="url"
              placeholder="Enter your URL"
              className="w-full p-4 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-4 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 bg-blue-600 text-white font-bold text-lg rounded-lg hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
