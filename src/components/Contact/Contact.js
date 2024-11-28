import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form submission logic here (e.g., send to a server)
    alert('Form submitted');
  };

  return (
    <section className="contact" id="contact">
      <h2 className="heading">Contact <span>Me!</span></h2>
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <div className="input-field">
            <input
              type="text"
              placeholder="Full Name"
              required
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <span className="focus"></span>
          </div>
          <div className="input-field">
            <input
              type="email"
              placeholder="Email Address"
              required
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <span className="focus"></span>
          </div>
        </div>

        <div className="input-box">
          <div className="input-field">
            <input
              type="number"
              placeholder="Mobile No."
              required
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
            />
            <span className="focus"></span>
          </div>
          <div className="input-field">
            <input
              type="text"
              placeholder="Email Subject"
              required
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
            <span className="focus"></span>
          </div>
        </div>

        <div className="textarea-field">
          <textarea
            name="message"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <span className="focus"></span>
        </div>
        <div className="btn-box btns">
          <button type="submit" className="btn">Submit</button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
