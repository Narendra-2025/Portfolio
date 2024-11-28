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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum tempora adipisci dicta dolor iste eveniet autem officiis quam architecto voluptatem accusantium enim asperiores, cupiditate pariatur exercitationem maiores culpa ullam debitis aspernatur rem, minus sit nobis tenetur vitae? Ea eaque et sunt. Quam laborum nisi commodi tempora dicta officia dolore consectetur?
        </p>
        <div className="btn-box btns">
          <button className="btn" onClick={handleReadMoreClick}>Read More</button>
        </div>
      </div>
    </section>
  );
};

export default About;
