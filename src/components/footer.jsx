import React from "react";
import "../styles/footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>Quick Links</h4>
        <a href="/">Home</a>

        <a href="/news">News About Us</a>
      </div>

      <div className="footer-logo">
        <img src="/Logo.png" alt="NeighbourGov Logo" height="60" />
        <p className="tagline">Empowering communities, one voice at a time.</p>
        <div className="footer-socials">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </div>
        <Link
          to="/initiative"
          style={{
            color: "var(--text-color)",
            textDecoration: "none",
            fontWeight: 500,
            transition: "color 0.3s ease",
            marginTop: "1rem",
            display: "inline-block",
            padding: "0.5rem 1rem",
            borderRadius: "4px",
          }}
          onMouseEnter={(e) => (e.target.style.color = "var(--accent-color)")}
          onMouseLeave={(e) => (e.target.style.color = "var(--text-color)")}
        >
          Initiatives
        </Link>
      </div>

      <div className="footer-section right">
        <h4>About Us</h4>
        <p>
          NeighbourGov is a civic-tech platform enabling real-time updates,
          public participation, and community engagement.
        </p>
        <p>
          © 2025 NeighbourGov
          <br />
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
