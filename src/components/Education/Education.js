import React from 'react';

const Education = () => {
  return (
    <section className="education" id="education">
      <h2 className="heading"> My <span>Journey</span></h2>
      <div className="education-row">
        {/* Education Column */}
        <div className="education-column">
          <h3 className="title">Education</h3>
          <div className="education-box">
            <div className="education-content">
              <div className="content">
                <div className="year"><i className='bx bxs-calendar'>2017-2018</i></div>
                <h3>High-School - SVM inter College</h3>
                <p>
                  Completed high-school with a focus on Science and Mathematics. Participated in various extracurricular activities, including sports and the student council.
                </p>
              </div>
            </div>
            <div className="education-content">
              <div className="content">
                <div className="year"><i className='bx bxs-calendar'>2019-2020</i></div>
                <h3>Intermediate- SVM inter College</h3>
                <p>
                  Completed Intermediate with a focus on Science and Mathematics. Participated in various extracurricular activities, including sports and the student council.
                </p>
              </div>
            </div>
            <div className="education-content">
              <div className="content">
                <div className="year"><i className='bx bxs-calendar'>2021-2025</i></div>
                <h3>Bachelor's Degree - Kamla Nehru Institute of Technology</h3>
                <p>
                  Currently pursuing a Bachelor's degree in Electronics engineering. Engaged in multiple hands-on projects . Gained knowledge in algorithms, data structures, and web development.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Column */}
        <div className="education-column">
          <h3 className="title">projects</h3>
          <div className="education-box">
            <div className="education-content">
              <div className="content">
                <h3>Travel-Maniac</h3>
                <p>
                  Travel Maniac" is an intuitive itinerary website designed to help users find travel destinations tailored to their preferences. Built with React.js and Vite, it combines efficiency and modern design to create a seamless travel-planning experience.
                </p>
              </div>
            </div>
            <div className="education-content">
              <div className="content">
                <h3>Portfolio</h3>
                <p>
                  I created a portfolio website using React.js to showcase my skills, projects, and achievements. The website features a modern design, smooth navigation, and responsive layouts, providing an engaging platform to highlight my professional journey.
                </p>
              </div>
            </div>
            <div className="education-content">
              <div className="content">
                <h3>Weather-Forcast-app</h3>
                <p>
                I developed a weather forecast application using React.js and the OpenWeatherMap API. This app allows users to search for real-time weather details of any city, including temperature, humidity, wind speed, and more, displayed in a user-friendly interface with a responsive design
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
