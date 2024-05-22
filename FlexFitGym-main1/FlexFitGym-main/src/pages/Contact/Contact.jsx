import "./Contact.css";
import { useState } from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform further actions or submit the form data
    console.log(formData);

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    alert("Message Send Successfully");
  };
  return (
    <div className="contact-wrapper">
      {/* Contact banner */}
      <section className="contact-banner  banner">
        <div className="container center">
          <div className="banner-heading">
            <h1>Contact</h1>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="contact center my-5">
        <div className="container py-5">
          {/* Heading */}
          <div className="heading">
            <h1
              className="uppercase center text-xl font-bold"
              style={{ color: "orangered" }}
            >
              Contact Us
            </h1>
          </div>

          {/* Sub-heading */}
          <div className="sub-heading p-2 mb-5">
            <h1 className="uppercase center text-4xl font-bold">
              Get in Touch
            </h1>
          </div>

          {/* Contacts */}
          <div className="contacts-row center flex-wrap">
            {/* Contact column 1 */}
            <div className="contact-col center flex-col">
              <div className="col-icon">
                <FaPhoneAlt />
              </div>
              <div className="col-heading">
                <h4>Call Us</h4>
              </div>
              <div className="col-text">
                <p>+212 6 52 52 09 69</p>
              </div>
            </div>

            {/* Contact column 2 */}
            <div className="contact-col center flex-col">
              <div className="col-icon">
                <FaEnvelope />
              </div>
              <div className="col-heading">
                <h4>Email us</h4>
              </div>
              <div className="col-text">
                <p>flexgym@gmail.com</p>
              </div>
            </div>

            {/* Contact column 3 */}
            <div className="contact-col center flex-col">
              <div className="col-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="col-heading">
                <h4>Visit us</h4>
              </div>
              <div className="col-text">
                <p> Lot Nice, Californie, Casablanca</p>
              </div>
            </div>
          </div>

          {/* Contact us row */}
          <div className="contact-us-row p-5 center flex-wrap">
            {/* Contact form column */}
            <div className="contact-us-col" id="message-form-col">
              <div className="form-container center flex-col">
                <div className="heading m-2 p-2">
                  <h3 className="uppercase text-center font-bold text-white">
                    Message us
                  </h3>
                </div>
                {/* Contact form */}
                <form action="" id="message-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Mansouri Abir"
                      className="input-controls"
                      value={formData.name}
                      onChange={handleChange}
                      minLength={3}
                      maxLength={25}
                      pattern="[A-Za-z\s]+"
                      required
                    />
                  </div>
                  <div className="form-row center">
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        placeholder="mansouriabir@gmail.com"
                        className="input-controls"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="tel"
                        name="phone"
                        placeholder=" 661097656"
                        className="input-controls"
                        value={formData.phone}
                        onChange={handleChange}
                        pattern="[0-9]{10}"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      className="input-controls"
                      value={formData.subject}
                      onChange={handleChange}
                      minLength={4}
                      maxLength={24}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      placeholder="Message"
                      style={{ height: "100px" }}
                      className="input-controls"
                      value={formData.message}
                      onChange={handleChange}
                      minLength={6}
                      maxLength={250}
                      required
                    ></textarea>
                  </div>
                  <div className="form-group center">
                    <input type="submit" value="Send Message" id="send-btn" />
                  </div>
                </form>
              </div>
            </div>

            {/* Map column */}
            <div className="contact-us-col" id="map-col">
              <div className="map-container">
                {/* Google Maps embed */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13223.727139396284!2d-7.62029857018806!3d33.59044222586531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdad9e407aec72ab%3A0x5685eb47e1c7c56!2sRabat!5e0!3m2!1sen!2sma!4v1688132794860!5m2!1sen!2sma"
                  loading="lazy"
                  className="address-map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
