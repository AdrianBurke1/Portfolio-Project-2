import React from 'react';
import './Contact.css';
function Contact() {
  return (
    <section id="contact">
      <p className="section__text__p1"><h1>Meet The Team</h1>Meet The Team</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <img
            src='./Assets/email.png'
            alt="Email icon"
            className="icon contact-icon email-icon"
          />
          <p><a href="mailto:examplemail@gmail.com">adrianburke902@gmail.com</a></p>
        </div>
        <div className="contact-info-container">
          <img
            src="./assests/linkedin.png"
            alt="LinkedIn icon"
            className="icon contact-icon"
          />
          <p><a href="https://www.linkedin.com">LinkedIn</a></p>
        </div>
        <div className="contact-info-container">
          <p><a>(929) 371 0148</a></p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
