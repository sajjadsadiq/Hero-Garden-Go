import React from 'react'
import emailjs from 'emailjs-com';

const Contact = () => {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_2g5a0ch', 'template_01n3d3n', e.target, 'user_8Nd22F9PPWNpJZnAbyGbW')
      .then((result) => {
          alert("Message sent successfully!")
          
      }, (error) => {
          console.log(error.text);
      });
  }

    return (
        <div className="text-center bg-dark text-white p-3">
            
            <h3 className="p-3">Contact With Us</h3>
            <form onSubmit={sendEmail}>     
                <input className="p-2 rounded" type="text" name="name"  placeholder="Your Name" /> <br/> <br/>
                <input className="p-2 rounded" type="email" name="email"  placeholder="Your Email" /> <br/> <br/> 
                <input className="p-2 rounded" type="text" name="subject"  placeholder="subject" /> <br/> <br/> 
                <textarea className="p-2 mb-4 rounded" name="message" id="message" cols="40" rows="7" placeholder="Your Message"></textarea> <br/> 
                <input className="btn btn-primary" type="submit" value="SEND" />
            </form>
        
        </div>
    )
}

export default Contact
