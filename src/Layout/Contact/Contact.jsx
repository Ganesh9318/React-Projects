import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <h1>Get In Touch</h1>
      <div className="contact-content">
        <div className="contact-info">
          <h2>Let's Connect</h2>
          <p>
            Feel free to reach out for collaborations or just a friendly hello
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <p>grai3842@gmail.com</p>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <p>+91 9318378413</p>
            </div>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <p> Janakpuri, New Delhi, India</p>
            </div>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/Ganesh9318"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://linkedin.com/in/ganesh-kumar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://twitter.com/@GANESH37707779"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>

        <form className="contact-form">
          <div className="form-group">
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Subject" required />
          </div>
          <div className="form-group">
            <textarea placeholder="Your Message" rows="5" required></textarea>
          </div>
          <button type="submit" className="sumbitBtn">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
