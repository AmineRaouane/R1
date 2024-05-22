import { useState } from "react";
import form_bg from "/images/reg-form-bg.jpg";
import { FaCheckCircle } from "react-icons/fa";
import "./Register.css";

const Register = () => {
  // State Management for user data
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    plan: "",
  });

  // State Management for Error
  const [errorMessage, setErrorMessage] = useState({
    nameError: "",
    emailError: "",
    phoneError: "",
    genderError: "",
    planError: "",
  });

  const [messageActive, setMessageActive] = useState(false);

  // Handle Change / handle Input Function
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  //handle Form Submit
  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, phone, gender, plan } = userData;

    let hasError = false;

    // Name validation
    if (name.trim() === "") {
      setErrorMessage((prevErrorMessage) => ({
        ...prevErrorMessage,
        nameError: "Name is required",
      }));
      hasError = true;
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
      setErrorMessage((prevErrorMessage) => ({
        ...prevErrorMessage,
        nameError: "Name must not contain numbers",
      }));
      hasError = true;
    } else if (name.length < 3 || name.length > 25) {
      setErrorMessage((prevErrorMessage) => ({
        ...prevErrorMessage,
        nameError: "Name must be between 3 and 25 characters",
      }));
      hasError = true;
    } else {
      setErrorMessage((prevErrorMessage) => ({
        ...prevErrorMessage,
        nameError: "",
      }));
    }

    // Email validation
    if (email.trim() === "") {
      setErrorMessage((prevErrorMessage) => ({
        ...prevErrorMessage,
        emailError: "Email is required",
      }));
      hasError = true;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage((prevErrorMessage) => ({
        ...prevErrorMessage,
        emailError: "Invalid email address",
      }));
      hasError = true;
    } else {
      setErrorMessage((prevErrorMessage) => ({
        ...prevErrorMessage,
        emailError: "",
      }));
    }

    // Phone number validation
    if (phone.trim() === "") {
      setErrorMessage((prevErrorMessage) => ({
        ...prevErrorMessage,
        phoneError: "Phone number is required",
      }));
      hasError = true;
    } else if (!/^\d{10}$/.test(phone)) {
      setErrorMessage((prevErrorMessage) => ({
        ...prevErrorMessage,
        phoneError: "Phone number must be 10 digits",
      }));
      hasError = true;
    } else {
      setErrorMessage((prevErrorMessage) => ({
        ...prevErrorMessage,
        phoneError: "",
      }));
    }

    // Gender validation
    if (gender === "") {
      setErrorMessage((prevErrorMessage) => ({
        ...prevErrorMessage,
        genderError: "Gender is required",
      }));
      hasError = true;
    } else {
      setErrorMessage((prevErrorMessage) => ({
        ...prevErrorMessage,
        genderError: "",
      }));
    }

    // Plan validation
    if (plan === "") {
      setErrorMessage((prevErrorMessage) => ({
        ...prevErrorMessage,
        planError: "Choose a plan",
      }));
      hasError = true;
    } else {
      setErrorMessage((prevErrorMessage) => ({
        ...prevErrorMessage,
        planError: "",
      }));
    }

    if (!hasError) {
      console.log(userData);
      setMessageActive(true);
      setUserData({
        name: "",
        email: "",
        phone: "",
        gender: "",
      });
    }
  };

  return (
    <div className="register-form-wrapper">
      {/*Main Section*/}
      <section className="registration-form-section center">
        <div className="container">
          {/*Side Image*/}
          <div className="form-side-image">
            <img src={form_bg} alt="" />
          </div>

          {/*Registration Form*/}
          <div className="registration-form-container">
            <div className="form-title mt-5" style={{ color: "orangered" }}>
              <h4 className="text-2xl font-bold text-center pt-4">
                Register to Become a Member
              </h4>
            </div>
            <div className="form-text mt-2">
              <p className="text-white text-center">
                We need your details to complete Registration
              </p>
            </div>
            <form action="" onSubmit={handleSubmit} id="register-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-input"
                  placeholder="Enter name"
                  onChange={handleChange}
                  value={userData.name}
                />
                <span className="error-message"> {errorMessage.nameError}</span>
              </div>
              <div className="reg-form-row flex">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-input"
                    placeholder="Enter email"
                    onChange={handleChange}
                    value={userData.email}
                  />
                  <span className="error-message">
                    {errorMessage.emailError}
                  </span>
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="form-input"
                    placeholder="Enter phone"
                    onChange={handleChange}
                    value={userData.phone}
                  />
                  <span className="error-message">
                    {errorMessage.phoneError}
                  </span>
                </div>
              </div>
              <div className="form-group flex flex-col">
                <label>Choose Gender</label>
                <select
                  name="gender"
                  id="gender-control"
                  value={userData.gender}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value={"Male"}>Male</option>
                  <option value={"Female"}>Female</option>
                </select>
                <span className="error-message">
                  {errorMessage.genderError}
                </span>
              </div>

              <div className="form-group">
                <label htmlFor="plan-selector">Choose a plan</label>
                <div className="plan-selector flex">
                  <div className="flex items-center p-2 m-1">
                    <input
                      type="radio"
                      name="plan"
                      id="plan-1"
                      onChange={handleChange}
                      value="Basic"
                      className="plan-input"
                    />
                    <div className="plan-details ms-2">
                      <h6 className="text-bold text-sm text-white uppercase">
                        Basic
                      </h6>
                      <p className="text-xs text-white">
                        <span>1000 dhs</span> per month
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center p-2 m-1">
                    <input
                      type="radio"
                      name="plan"
                      id="plan-2"
                      onChange={handleChange}
                      value="Premium"
                      className="plan-input"
                    />
                    <div className="plan-details ms-2">
                      <h6 className="text-bold text-sm text-white uppercase">
                        Premium
                      </h6>
                      <p className="text-xs text-white">
                        <span>1600 dhs</span> per month
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center p-2 m-1">
                    <input
                      type="radio"
                      name="plan"
                      id="plan-3"
                      onChange={handleChange}
                      value="Gold"
                      className="plan-input"
                    />
                    <div className="plan-details ms-2">
                      <h6 className="text-bold text-sm text-white uppercase">
                        Gold
                      </h6>
                      <p className="text-xs text-white">
                        <span>2000 dhs</span> per month
                      </p>
                    </div>
                  </div>
                </div>
                <span className="error-message">{errorMessage.planError}</span>
              </div>

              <div className="form-btn mx-4 mt-3">
                <input type="submit" id="register-btn" value="Register Me" />
              </div>
            </form>
          </div>
        </div>
      </section>
      {/*Success Message Prompt*/}
      <section
        className={`success-message center ${
          messageActive ? "msg-active" : ""
        }`}
      >
        <div className="container center flex-col p-4">
          <div className="icon">
            <FaCheckCircle />
          </div>
          <div className="text">
            <p className="msg text-center text-white  text-2xl">
              Congratulations You are Now A Member of Flex Gym Family
            </p>
          </div>
          <div className="close-btn">
            <button
              onClick={() => {
                setMessageActive(false);
              }}
            >
              Close
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
