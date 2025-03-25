import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar({ isAuthenticated, setIsAuthenticated }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Activity Point Tracker</h1>
      </div>

      <ul className="nav-links">
        {/* Hide Home button only when the user is on the Home page */}
        {location.pathname !== "/home" && (
          <li><Link to="/home">Home</Link></li>
        )}
      </ul>

      <div className="nav-actions">
        <button className="notification-btn">🔔</button>
        {isAuthenticated && (
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
