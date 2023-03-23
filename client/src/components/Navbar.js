import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link className="navbar-brand" to="/">
        MERN App
      </Link>
      <div className="navbar-nav">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/posts">
          Posts
        </Link>
        <Link className="nav-link" to="/create">
          Create
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
