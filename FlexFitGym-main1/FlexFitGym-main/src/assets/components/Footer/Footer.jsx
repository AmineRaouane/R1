import "./Footer.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="footer center flex-col">
      <div className=".container py-4">
        {/* Container for the footer content */}
        <div className="footer-row center flex-wrap">
          {/* Row container for the footer columns */}
          <div className="footer-col">
            {/* First column */}
            <div className="heading">
              <h4>Get In Touch</h4>
            </div>
            <div className="ftr-list-cont">
              {/* Container for the contact information list */}
              <ul className="ftr-list mt-2">
                {/* List of contact information */}
                <li className="ftr-list-item my-1">
                  <div className="ftr-icon">
                    <FaPhoneAlt /> {/* Phone icon from react-icons library */}
                  </div>
                  <p>+212 6 52 52 09 69</p>
                </li>
                <li className="ftr-list-item my-1">
                  <div className="ftr-icon">
                    <FaEnvelope />
                    {/* Envelope icon from react-icons library */}
                  </div>
                  <p>flexgym@gmail.com</p>
                </li>
                <li className="ftr-list-item my-1">
                  <div className="ftr-icon">
                    <FaMapMarkerAlt />{" "}
                    {/* Map marker icon from react-icons library */}
                  </div>
                  <p>LOT NICE, CALIFORNIE, CASABLANCA</p>
                </li>
              </ul>
            </div>
            <div className="social-handles flex">
              {/* Container for social media handles */}
              <div className="handle">
                <Link to="https://www.facebook.com" target="_blank">
                  <FaFacebook /> {/* Facebook icon from react-icons library */}
                </Link>
              </div>
              <div className="handle">
                <Link to="https://www.instagram.com" target="_blank">
                  <FaInstagram />
                  {/* Instagram icon from react-icons library */}
                </Link>
              </div>
              <div className="handle">
                <Link to="https://www.twitter.com" target="_blank">
                  <FaTwitter /> {/* Twitter icon from react-icons library */}
                </Link>
              </div>
              <div className="handle">
                <Link to="https://www.linkedin.com" target="_blank">
                  <FaLinkedin /> {/* LinkedIn icon from react-icons library */}
                </Link>
              </div>
            </div>
          </div>
          <div className="footer-col">
            {/* Second column */}
            <div className="heading">
              <h4>Quick Links</h4>
            </div>
            <div className="ftr-list-cont">
              {/* Container for quick links */}
              <ul className="ftr-list mt-2">
                {/* List of quick links */}
                <li className="ftr-list-item text-white my-1">
                  <Link
                    to="/"
                    className="ftr-links text-slate-200"
                    onClick={scrollToTop}
                  >
                    {/* Link to home */}
                    Home
                  </Link>
                </li>
                <li className="ftr-list-item text-white my-1">
                  <Link
                    to="/about"
                    className="ftr-links text-slate-200"
                    onClick={scrollToTop}
                  >
                    {/* Link to about */}
                    About
                  </Link>
                </li>
                <li className="ftr-list-item text-white my-1">
                  <Link
                    to="/classes"
                    className="ftr-links text-slate-200"
                    onClick={scrollToTop}
                  >
                    {/* Link to classes */}
                    Partners
                  </Link>
                </li>
                <li className="ftr-list-item text-white my-1">
                  <Link
                    to="/trainers"
                    className="ftr-links text-slate-200"
                    onClick={scrollToTop}
                  >
                    {/* Link to trainers */}
                    Trainers
                  </Link>
                </li>
                <li className="ftr-list-item text-white my-1">
                  <Link
                    to="/contact"
                    className="ftr-links text-slate-200"
                    onClick={scrollToTop}
                  >
                    {/* Link to contact */}
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-col">
            {/* Third column */}
            <div className="heading">
              <h4>Newsletter</h4>
            </div>
            <div className="ftr-content">
              {/* Container for newsletter content */}
              <div className="title  mt-2">
                <h4 className="text-white uppercase text-xl">
                  Subscribe our Newsletter
                </h4>
              </div>
              <div className="text">
                <p className="text-slate-200">
                  Subscribe to our newsletter for the latest updates, exclusive
                  offers, fitness tips, and inspirational content. Stay
                  connected with our community and elevate your fitness journey.
                  Sign up today!
                </p>
              </div>
              <div className="news-ltr-form my-3">
                <form action="">
                  {/* Newsletter subscription form */}
                  <div className="ltr-form-group">
                    <input
                      type="email"
                      style={{
                        width: "200px",
                        borderRadius: "6px 0px 0px 6px",
                      }}
                      placeholder="Enter Email"
                      className="ps-4"
                      required
                    />
                    <input
                      type="submit"
                      value="signup"
                      style={{
                        backgroundColor: "orangered",
                        width: "100px",
                        borderRadius: "0px 6px 6px 0px",
                      }}
                      className="text-white uppercase cursor-pointer"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-rght w-full bg-zinc-950">
        {/* Container for copyright */}
        <div className="flex justify-between items-center p-5 text-white w-full">
          <p>&copy; flexgym.com | All Rights Reserved.</p>
          <p>POWERED BY GROUP3</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

