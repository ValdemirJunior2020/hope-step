import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';

function PlanCard({ title, content, bgColor, emoji }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="card mb-3 text-white shadow"
      style={{ backgroundColor: bgColor, transition: '0.3s ease-in-out' }}
    >
      <div className="card-body">
        <h4
          className="card-title fw-bold d-flex justify-content-between align-items-center"
          style={{ cursor: 'pointer' }}
          onClick={() => setOpen(!open)}
        >
          {emoji} {title}
          <span>{open ? '−' : '+'}</span>
        </h4>

        <Collapse in={open}>
          <div>
            <p className="card-text" style={{ whiteSpace: 'pre-wrap', fontWeight: 'bold' }}>
              {content}
            </p>
          </div>
        </Collapse>
      </div>
    </div>
  );
}

export default PlanCard;
