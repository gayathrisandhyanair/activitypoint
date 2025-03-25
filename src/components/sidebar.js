import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/add-certificate">Add Certificate</Link></li>
        <li><Link to="/details">Details</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
