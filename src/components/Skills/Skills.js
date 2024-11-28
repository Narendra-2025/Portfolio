import React from 'react';

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="heading">My <span>Skills</span></h2>
      <div className="skills-row">
        <div className="skills-column">
          <h3 className="title">Coding Skills</h3>
          <div className="skills-box">
            <div className="skills-content">
              <div className="progress">
                <h3>Html <span>90%</span></h3>
                <div className="bar"><span style={{ width: '90%' }}></span></div>
              </div>
              <div className="progress">
                <h3>css <span>80%</span></h3>
                <div className="bar"><span style={{ width: '80%' }}></span></div>
              </div>
              <div className="progress">
                <h3>javascript <span>65%</span></h3>
                <div className="bar"><span style={{ width: '65%' }}></span></div>
              </div>
              <div className="progress">
                <h3>C++ <span>70%</span></h3>
                <div className="bar"><span style={{ width: '70%' }}></span></div>
              </div>
              <div className="progress">
                <h3>Python <span>75%</span></h3>
                <div className="bar"><span style={{ width: '75%' }}></span></div>
              </div>
            </div>
          </div>
        </div>

        <div className="skills-column">
          <h3 className="title">Professional Skills</h3>
          <div className="skills-box">
            <div className="skills-content">
              <div className="progress">
                <h3>Web Design <span>95%</span></h3>
                <div className="bar"><span style={{ width: '95%' }}></span></div>
              </div>
              <div className="progress">
                <h3>Web Development <span>68%</span></h3>
                <div className="bar"><span style={{ width: '68%' }}></span></div>
              </div>
              <div className="progress">
                <h3>Graphic Design <span>85%</span></h3>
                <div className="bar"><span style={{ width: '85%' }}></span></div>
              </div>
              <div className="progress">
                <h3>SEO Marketing <span>60%</span></h3>
                <div className="bar"><span style={{ width: '60%' }}></span></div>
              </div>
              <div className="progress">
                <h3>Content Writing <span>90%</span></h3>
                <div className="bar"><span style={{ width: '90%' }}></span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
