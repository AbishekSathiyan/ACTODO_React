import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddTodoForm({ addActivity }) {
  const [activity, setActivity] = useState("");
  const navigate = useNavigate();

  const handleAdd = () => {
    addActivity(activity);
    setActivity(""); // Clear input field after adding
  };

  const handleLogout = () => {
    localStorage.removeItem("user"); // Clear user data
    navigate("/login"); // Redirect to login
  };

  return (
    <div className="todo-container p-4 md:p-6 w-full">
      <div className="header mb-4 flex justify-between items-center">
        <h1 className="font-bold text-2xl md:text-3xl text-blue-600">
          Manage Activities
        </h1>
      </div>

      {/* Responsive Input & Button Section */}
      <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
        <input
          type="text"
          placeholder="Enter Activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-3 flex-1 text-sm md:text-lg w-full sm:w-2/3"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md text-sm md:text-lg w-full sm:w-auto"
        >
          Add
        </button>
      </div>

      {/* Contact Link Section */}
      <div className="mt-6 text-center">
        <a href="/contact" className="text-blue-500 hover:underline text-lg">
          Contact Us
        </a>
      </div>
       
    </div>
  );
}

export default AddTodoForm;
