import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header.jsx";
import TodoContainer from "./components/TodoContainer.jsx";
import SignUp from "./components/signup.jsx";
import Login from "./components/login.jsx";
import Contact from "./components/Contact.jsx";
import "./App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");

  return (
    <div className="font-sans bg-gray-100 min-h-screen text-center">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/login"
            element={
              <Login
                setIsAuthenticated={setIsAuthenticated}
                setUsername={setUsername}
              />
            }
          />
          <Route
            path="/home"
            element={
              isAuthenticated ? (
                <Home username={username} />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// Home Component
function Home({ username }) {
  return (
    <div className="flex justify-center items-center p-4 md:p-8">
      <div className="bg-[#EFEFEF] p-6 md:p-8 border rounded-md w-full max-w-3xl">
        <Header username={username} />
        <TodoContainer />
      </div>
    </div>
  );
}

export default App;
