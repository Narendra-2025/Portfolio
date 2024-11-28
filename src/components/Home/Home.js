import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';


const Home = () => {
  return (
    <section className="home" id="home">
      <div className="homecontent">
        <h1>Hi, I'm <span>Narendra Kumar</span></h1>
        <div className="text-animate">
          <h3>Frontend Developer</h3>
        </div>
        <p>
          A front-end developer focused on building responsive, user-centric web interfaces. With expertise in HTML, CSS, and JavaScript, I create optimized and engaging digital experiences.
        </p>
        <div className="btn-box">
          <button className="btn" onClick={() => { /* Add your event handling logic */ }}>Hire Me</button>
          <button className="btn" onClick={() => { /* Add your event handling logic */ }}>Let's Talk</button>
        </div>
      </div>
      <div className="home-si">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF size={18} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={18} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn size={18} />
          </a>
      </div>

      <div className="home-image">
        <img src="/assets/abtt.jpg" alt="Profile" />
      </div>
    </section>
  );
};

export default Home;
