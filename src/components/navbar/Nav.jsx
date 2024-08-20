import { useState, useEffect } from 'react';
import { CiSearch } from "react-icons/ci";
import { PiWhatsappLogoLight } from "react-icons/pi";
import { assets } from "../../assets/script";
import { Link } from "react-router-dom";


const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight =document.querySelector('.home-banner-container').offsetHeight;
      setScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={scrolled ? 'navbar-container scrolled' : 'navbar-container'}>
      <div className="navbar-container-section">
        <div className="navbar-item">
          <div className="searchbar-white">
            <CiSearch className="search-icon" />
          </div>
          <div className="navbar-item-list">
            <ul className="items-list">
              <li>list a property</li>
              <li>Services</li>
            </ul>
          </div>
        </div>
        <div className="company-logo">
          <Link to="/">
            <img src={assets.companyLogo} alt="Company Logo" className="company-logo-img" />
          </Link>
        </div>
        <div className="navbar-item-2">
          <div className="navbar-item-list-2">
            <ul className="items-list-2">
              <li>About</li>
              <li>People</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="whatsapp-white">
            <PiWhatsappLogoLight className="whatsapp-white-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
