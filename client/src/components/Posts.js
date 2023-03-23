import React, { useState, useEffect } from "react";
import "./Posts.css";

const Posts = () => {
  const [posts, setPosts] = useState([
    {
      title: "Sample Post Title",
      content: "This a sample post content",
    },
  ]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const response = await fetch("/api/posts");
    const data = await response.json();
    setPosts(data);
  };

  return (
    <div className="posts-container">
      <h1>All Posts</h1>
      {posts.map((post) => (
        <div key={post._id} className="post">
          <h2>{post.title}</h2>
          <h2>{post.content}</h2>
        </div>
      ))}
    </div>
  );
};

export default Posts;
