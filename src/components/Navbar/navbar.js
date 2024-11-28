import React, { useState, useEffect } from 'react';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    // Handle scrolling behavior
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = '';

      sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 100;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);

      // Handle sticky header
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100,
        behavior: 'smooth',
      });
      closeMenu();
    }
  };

  return (
    <header className={`header ${isSticky ? 'sticky' : ''}`}>
      <a href="#home" className="logo">Narendra.</a>
      <div
        id="menu-icon"
        className={`bx bx-menu ${isMenuOpen ? 'bx-x' : ''}`}
        onClick={handleMenuToggle}
      ></div>
      <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
        <a
          href="#home"
          className={activeSection === 'home' ? 'active' : ''}
          onClick={() => scrollToSection('home')}
        >
          Home
        </a>
        <a
          href="#about"
          className={activeSection === 'about' ? 'active' : ''}
          onClick={() => scrollToSection('about')}
        >
          About
        </a>
        <a
          href="#education"
          className={activeSection === 'education' ? 'active' : ''}
          onClick={() => scrollToSection('education')}
        >
          Education
        </a>
        <a
          href="#skills"
          className={activeSection === 'skills' ? 'active' : ''}
          onClick={() => scrollToSection('skills')}
        >
          Skills
        </a>
        <a
          href="#contact"
          className={activeSection === 'contact' ? 'active' : ''}
          onClick={() => scrollToSection('contact')}
        >
          Contact
        </a>
        <span className="active-nav"></span>
      </nav>
    </header>
  );
};

export default Navbar;
