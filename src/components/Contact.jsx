import React, { useState } from "react";
import "./Contact.css"; 

export default function Contact() {
  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent!\n\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nMessage: ${formData.message}`);

    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="contact" id="contact">
      <div className="content-inner">
        <div className="content-header">
        <h2 class="short-border">Contact Me</h2>
        </div>
        <div className="row">
          <div className="contact-info">
            <p>Divyansh Bhardwaj</p>
            <p><a href="mailto:divyansh02032003@gmail.com">divyansh02032003@gmail.com</a></p>
            <p><a href="tel:+916205795464">+91 62057 95464</a></p>
            <p>Casa Woodstock, Greater Noida, Uttar Pradesh - 201009</p>
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <input type="text" name="name" className="form-control" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                <input type="email" name="email" className="form-control" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
              </div>
              <input type="text" name="subject" className="form-control" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
              <textarea name="message" className="form-control" rows="5" placeholder="Message" value={formData.message} onChange={handleChange} required></textarea>
              <button className="btn" type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
