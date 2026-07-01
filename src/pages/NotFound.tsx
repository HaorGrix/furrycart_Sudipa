import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container empty-state" style={{ padding: '150px 20px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '6rem', color: 'var(--primary-color)', marginBottom: '10px', lineHeight: 1 }}>404</h1>
      <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Page Not Found</h2>
      <p style={{ color: 'var(--text-light)', marginBottom: '40px', maxWidth: '500px', margin: '0 auto 40px' }}>
        Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link to="/" className="btn btn-primary">Go to Homepage</Link>
    </div>
  );
};

export default NotFound;
