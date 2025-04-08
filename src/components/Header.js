import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4 sticky-top shadow-sm">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">Hope Steps</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto d-flex align-items-center gap-2">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/plan">Get Plan</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/stories">Stories</Link>
            </li>
            <li className="nav-item">
              <a
                href="https://www.paypal.com/ncp/payment/YRM2M5FYH4W72"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-warning text-dark fw-bold"
                style={{ borderRadius: '8px' }}
              >
                💛 Donate
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
