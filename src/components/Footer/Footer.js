import React from 'react';
import { FaArrowAltCircleUp } from 'react-icons/fa';

const Footer = () => {
  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footbar">
      <div className="footbar-text">
        <p>Copyright &copy; All Rights Reserved.</p>
      </div>
      <div className="footbar-iconTop">
        <a href="#top" className="btn" onClick={handleScroll}>
        <FaArrowAltCircleUp size={18} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
