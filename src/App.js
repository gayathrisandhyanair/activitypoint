import React, { useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/sidebar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AddCertificate from "./pages/Addcertificate";
import Details from "./pages/Details";
import Profile from "./pages/Profile";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
 

  return (
    <div className={isAuthenticated ? "authenticated" : ""}>
      {/* Show Navbar only if user is authenticated */}
      {isAuthenticated && <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />}

      <div className="layout">
        {/* Show Sidebar only if user is authenticated */}
        {isAuthenticated && <Sidebar />}

        <div className={`content ${!isAuthenticated ? "full-width" : ""}`}>
          <Routes>
            {/* Redirect authenticated users to home, otherwise show login */}
            <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <Login setIsAuthenticated={setIsAuthenticated} />} />
            
            {/* Login Route */}
            <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />

            {/* Protected Routes: Only accessible when authenticated */}
            {isAuthenticated ? (
              <>
                <Route path="/home" element={<Home />} />
                <Route path="/add-certificate" element={<AddCertificate />} />
                <Route path="/details" element={<Details />} />
                <Route path="/profile" element={<Profile />} />
              </>
            ) : (
              // Redirect all other routes to login if not authenticated
              <Route path="*" element={<Navigate to="/login" />} />
            )}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
