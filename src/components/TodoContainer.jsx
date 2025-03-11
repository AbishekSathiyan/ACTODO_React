import React, { useState } from "react";
import { Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import AddTodoForm from "./AddTodoForm"; // ✅ Fixed import
import Contact from "./Contact"; // ✅ Fixed import

function TodoContainer() {
  const [activities, setActivities] = useState([]);
  const [alert, setAlert] = useState({ message: "", type: "" });
  const navigate = useNavigate();

  const showAlert = (message, type) => {
    setAlert({ message, type });
    setTimeout(() => setAlert({ message: "", type: "" }), 2000);
  };

  const addActivity = (activity) => {
    if (activity.trim() === "") {
      showAlert("Please enter an activity!", "error");
      return;
    }
    setActivities([...activities, activity]);
    showAlert("Activity added successfully! ✅", "success");
  };

  const removeActivity = (index) => {
    const updatedActivities = activities.filter((_, i) => i !== index);
    setActivities(updatedActivities);
    showAlert("Activity removed! ❌", "info");
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login"); // ✅ Fixed Logout Redirection
  };

  const alertColors = {
    success: "bg-green-500",
    error: "bg-red-500",
    info: "bg-blue-500",
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <AnimatePresence>
        {alert.message && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className={`${alertColors[alert.type]} text-white text-center py-2 px-4 rounded-md shadow-md mb-3 w-full max-w-md`}
          >
            {alert.message}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="bg-[#BDB4EA] border border-gray-400 rounded-md p-4 md:p-6 shadow-md w-full max-w-lg">
        <AddTodoForm addActivity={addActivity} />

        <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-3 text-center">
          Today's Activities
        </h2>

        {activities.length === 0 ? (
          <p className="text-gray-700 text-center text-sm md:text-base">
            You haven't added any Activity
          </p>
        ) : (
          <ul className="text-gray-700 text-sm md:text-base max-h-40 overflow-y-auto pr-2">
            {activities.map((activity, index) => (
              <li key={index} className="flex items-center bg-white px-4 py-2 rounded-md shadow-md mb-2">
                <span className="flex-1 text-left">{activity}</span>
                <button onClick={() => removeActivity(index)} className="text-red-500 hover:text-red-700">
                  <Trash2 size={20} />
                </button>
              </li>
            ))}
          </ul>
        )}

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm md:text-lg w-full mt-4"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default TodoContainer;
