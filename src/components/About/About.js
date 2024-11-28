import React from 'react';

const About = () => {
  const handleReadMoreClick = () => {
    // You can add the logic for the "Read More" button here.
    // For example, scrolling to a specific section or showing more content.
    alert('Read More clicked!');
  };

  return (
    <section className="about" id="about">
      <h2 className="heading">About <span>Me</span></h2>
      <div className="about-img">
        <img src="/assets/abt3.jpg" alt="About" />
        <span className="circle-spin"></span>
      </div>
      <div className="about-content">
        <h3>Frontend Developer</h3>
        <p>
          I am a Frontend Developer passionate about building responsive, user-friendly web applications. 
          Skilled in HTML, CSS, JavaScript, and React.js, I love turning ideas into seamless digital experiences. 
          I’m always eager to learn and grow in this ever-evolving field.
        </p>
        <div className="btn-box btns">
          <button className="btn" onClick={handleReadMoreClick}>Read More</button>
        </div>
      </div>
    </section>
  );
};

export default About;
