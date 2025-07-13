import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1>404</h1>
        <p>Page Not Found</p>
        <p>The route you are looking for does not exist.</p>
        <Link to="/" className="home-link">Go to Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
