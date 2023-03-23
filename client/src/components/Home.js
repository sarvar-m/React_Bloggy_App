import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the MERN App</h1>
      <p>
        This app allows you to view all posts and create new ones. Use the
        navigation bar or the buttons below to navigate through the app.
      </p>
      <div className="home-buttons">
        <Link to="/posts" className="btn btn-posts">
          View Posts
        </Link>
        <Link to="/create" className="btn btn-create">
          Create Posts
        </Link>
      </div>
    </div>
  );
};

export default Home;
