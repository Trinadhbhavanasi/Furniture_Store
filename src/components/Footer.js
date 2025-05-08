import React from 'react';
import './Footer.css'; // We’ll create this next

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <p>© COPYRIGHT 2025 &nbsp; <strong>SOFA, SO GOOD®</strong> is a registered, protected trademark.</p>
      </div>

      <div className="footer-middle">
        <h4>Join our mailing list.</h4>
        <p>Stay on top of the latest in the world of home interiors.</p>
        <input type="email" placeholder="Enter your email" />
        <button>SUBSCRIBE</button>
      </div>

      <div className="footer-bottom">
        <h5>Follow us on</h5>
        <ul className="social-links">
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">LinkedIn</a></li>
          <li><a href="#">YouTube</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Pinterest</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
