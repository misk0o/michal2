// src/sections/AuthHomeView.tsx

"use client";

import React from "react";
import "../styles/AuthHomeView.css"; // Import new CSS file

interface AuthHomeViewProps {
  session: any;
  posts: any[];
}

const AuthHomeView: React.FC<AuthHomeViewProps> = ({ session, posts }) => {
  return (
    <div className="auth-container">
      <header className="header-section">
        <h1 className="welcome-text">Hello, {session.user.name}!</h1>
      </header>
      
      <section className="posts-section">
        <h2 className="section-title">Your Recent Posts</h2>
        <div className="posts-grid">
          {posts.length > 0 ? (
            posts.map((post) => (
              <div key={post.id} className="post-item">
                <img
                  src={post.imageUrl}
                  alt={post.caption}
                  className="post-thumbnail"
                />
                <div className="caption-box">
                  <p>{post.caption}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="no-posts">No posts available. Share something new!</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default AuthHomeView;
