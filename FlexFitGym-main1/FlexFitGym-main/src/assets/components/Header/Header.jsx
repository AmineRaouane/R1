import "./Header.css";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  // State variable to keep track of the navigation active state
  const [navActive, setNavActive] = useState(false);

  // Function to toggle the navbar/sidebar
  const toggleNav = () => {
    if (navActive === false) {
      setNavActive(true);
    } else {
      setNavActive(false);
    }
  };

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <header className="header center">
      <div className="container around">
        {/* Button to toggle the navbar/sidebar */}
        <div className="menubar" onClick={toggleNav}>
          <FaBars />
        </div>
        {/* Brand/logo */}
        <div className="brand">
          <NavLink to="/">
            <h1 className="text-3xl uppercase px-8 py-4 font-bold text-center">
              Flex Gym
            </h1>
          </NavLink>
        </div>
        {/* Navigation */}
        <nav className={`navbar center ${navActive ? "nav-active" : ""}`}>
          <div className="container center">
            <ul className="navlist center">
              {/* Navigation links */}
              <li
                className="list-item"
                onClick={() => {
                  setNavActive(false);
                  scrollToTop();
                }}
              >
                <NavLink to="/" className="navlink p-2 mx-2">
                  Home
                </NavLink>
              </li>
              <li
                className="list-item"
                onClick={() => {
                  setNavActive(false);
                  scrollToTop();
                }}
              >
                <NavLink to="/about" className="navlink p-2 mx-2">
                  About
                </NavLink>
              </li>
              <li
                className="list-item"
                onClick={() => {
                  setNavActive(false);
                  scrollToTop();
                }}
              >
                <NavLink to="/classes" className="navlink p-2 mx-2">
                  Partners
                </NavLink>
              </li>
              <li
                className="list-item"
                onClick={() => {
                  setNavActive(false);
                  scrollToTop();
                }}
              >
                <NavLink to="/trainers" className="navlink p-2 mx-2">
                  Trainers
                </NavLink>
              </li>
              <li
                className="list-item"
                onClick={() => {
                  setNavActive(false);
                  scrollToTop();
                }}
              >
                <NavLink to="/contact" className="navlink p-2 mx-2">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        {/* Button for joining */}
        <div className="header-btn">
          <NavLink to="/register">
            <button className="joinus-btn uppercase px-8 py-4 rounded" onClick={scrollToTop}>
              Join us
            </button>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
