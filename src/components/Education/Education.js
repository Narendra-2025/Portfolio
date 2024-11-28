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
                <div className="year"><i className='bx bxs-calendar'>2019-2020</i></div>
                <h3>High-Schooling - ABC High School</h3>
                <p>
                  Completed high-school with a focus on Science and Mathematics. Participated in various extracurricular activities, including sports and the student council.
                </p>
              </div>
            </div>
            <div className="education-content">
              <div className="content">
                <div className="year"><i className='bx bxs-calendar'>2021-2025</i></div>
                <h3>Bachelor's Degree - XYZ College</h3>
                <p>
                  Currently pursuing a Bachelor's degree in Computer Science. Engaged in multiple hands-on projects and coding competitions. Gained knowledge in algorithms, data structures, and web development.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Column */}
        <div className="education-column">
          <h3 className="title">Experience</h3>
          <div className="education-box">
            <div className="education-content">
              <div className="content">
                <div className="year"><i className='bx bxs-calendar'>2022-2023</i></div>
                <h3>Internship - Frontend Developer at ABC Tech</h3>
                <p>
                  Worked as a frontend developer intern, building responsive websites using HTML, CSS, and JavaScript. Collaborated with the design team to implement UI components and improve website performance.
                </p>
              </div>
            </div>
            <div className="education-content">
              <div className="content">
                <div className="year"><i className='bx bxs-calendar'>2023-Present</i></div>
                <h3>Freelance Developer</h3>
                <p>
                  Currently working as a freelance developer, building and maintaining websites for small businesses. Focused on creating user-friendly interfaces and optimizing user experience across platforms.
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
