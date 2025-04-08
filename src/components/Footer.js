import React from 'react';

function Footer() {
  return (
    <footer className="bg-light text-center text-muted py-4 mt-5">
      <p className="mb-1">© {new Date().getFullYear()} Hope Steps</p>
      <p className="mb-0">
        Support our mission 💛 <br />
        <a
          href="https://www.paypal.com/ncp/payment/YRM2M5FYH4W72"
          target="_blank"
          rel="noopener noreferrer"
          className="fw-bold text-primary"
        >
          Click here to donate via PayPal
        </a>
      </p>
    </footer>
  );
}

export default Footer;
