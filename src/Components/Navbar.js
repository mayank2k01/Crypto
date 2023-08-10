
import React, { useState } from "react";
import "./Navbar.css";
import logo from "./Images/logo.jpeg"
import {
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const fun=({ isActive }) => {
    return isActive ? 'active_class' : '';
  }
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
         
          <img src={logo} alt="logo" />
            <h2>
              <span>C</span>rypto
              <span>R</span>adar
            </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink exact className={fun} to="/">Home</NavLink>
            </li>
            <li>
              <NavLink exact className={fun} to="/about">about</NavLink>
            </li>
            <li>
              <NavLink exact className={fun} to="/services">services</NavLink>
            </li>
            <li>
              <NavLink exact className={fun} to="/contact">contact</NavLink>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="https://www.facebook.com"
                target="_New">
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/mayanc2k01/"
                target="_New">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
           
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
