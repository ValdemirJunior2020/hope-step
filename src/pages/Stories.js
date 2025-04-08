import React from 'react';

function Stories() {
  return (
    <div className="container mt-5 text-center">
      <h2>💬 Success Stories</h2>
      <p className="lead">Be inspired by others who found hope.</p>

      <div className="card my-4 p-4">
        <h5 className="fw-bold">“I was struggling deeply...”</h5>
        <p>
          “Hope Steps gave me daily strength and pointed me to God’s love through scripture and encouragement. I’m smiling again.” <br />
          — Maria A.
        </p>
      </div>

      <div className="card my-4 p-4">
        <h5 className="fw-bold">“The plan was a game-changer.”</h5>
        <p>
          “Each day I followed the steps and Bible verses. It wasn’t magic—it was healing and grace.” <br />
          — Jamal R.
        </p>
      </div>
    </div>
  );
}

export default Stories;
