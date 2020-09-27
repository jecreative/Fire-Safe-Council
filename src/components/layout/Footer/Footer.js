import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa';
import { GiFireShield } from 'react-icons/gi';

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Destinations</Link>
            <Link to="/">Sponsorships</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Resources</h2>
            <Link to="/">Preparing for Wildfire</Link>
            <a
              href="https://www.sdgeweather.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Today's Fire Weather
            </a>
            <a
              href="https://www.fire.ca.gov/incidents/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Current Active Fires
            </a>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <a
              href="https://www.instagram.com/calfire/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/firesafesdcounty/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://www.youtube.com/user/cafiresafecouncil"
              target="_blank"
              rel="noopener noreferrer"
            >
              Youtube
            </a>
            <a
              href="https://twitter.com/cafiresafe?lang=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://www.linkedin.com/company/california-fire-safe-council/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              <GiFireShield className="navbar-icon" />
              UC | FSC
            </Link>
          </div>
          <small className="website-rights">
            Jordan Esguerra Creative Media © 2020
          </small>
          <div className="social-icons">
            <a
              className="social-icon-link"
              href="https://www.facebook.com/firesafesdcounty/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              className="social-icon-link"
              href="https://www.instagram.com/calfire/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              className="social-icon-a"
              href="https://www.youtube.com/user/cafiresafecouncil"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Youtube"
            >
              <FaYoutube />
            </a>
            <a
              className="social-icon-link"
              href="https://twitter.com/cafiresafe?lang=en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              className="social-icon-link"
              href="https://www.linkedin.com/company/california-fire-safe-council/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
