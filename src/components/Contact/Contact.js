import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_2g5a0ch',
        'template_01n3d3n',
        e.target,
        'user_8Nd22F9PPWNpJZnAbyGbW'
      )
      .then(
        (result) => {
          alert('Message sent successfully!');
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div className="text-center contactContainer">
      <h3 className="p-3">Contact With Us</h3>
      <div className="contactFormBox">
        <form className="contactForm" onSubmit={sendEmail}>
          <label htmlFor="">Your Name</label>
          <input
            className="p-2 rounded form-control"
            type="text"
            name="name"
            placeholder="Your Name"
          />{' '}
          <br /> <br />
          <label htmlFor="">Your Email</label>
          <input
            className="p-2 rounded"
            type="email"
            name="email"
            placeholder="Your Email"
          />{' '}
          <br /> <br />
          <label htmlFor="">Your Subject</label>
          <input
            className="p-2 rounded form-control"
            type="text"
            name="subject"
            placeholder="subject"
          />{' '}
          <br /> <br />
          <textarea
            className="p-2 mb-4 rounded form-control"
            name="message"
            id="message"
            cols="40"
            rows="7"
            placeholder="Your Message"
          ></textarea>{' '}
          <br />
          <input className="btn btn-primary" type="submit" value="SEND" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
