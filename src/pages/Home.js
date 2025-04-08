import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mt-5 text-center">
      <h1>Welcome to Hope Steps</h1>
      <p className="lead">Biblical and practical guidance for tough times.</p>
      <Link to="/plan" className="btn btn-primary btn-lg">Start Your Journey</Link>
    </div>
  );
}

export default Home;
