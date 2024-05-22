import "./Home.css";
import { Link } from "react-router-dom";
import about_img from "/images/about-bodybuilder-image.jpg";
import HomeCarousel from "../../assets/components/HomeCarousel/HomeCarousel";
import { useState } from "react";

const Home = (props) => {
  const [faqOpen, setFaqOpen] = useState(null);

  const toggleFaq = (index) => {
    if (faqOpen === index) {
      setFaqOpen(null);
    } else {
      setFaqOpen(index);
    }
  };

  return (
    <>
      <section className="home-carousel">
        <HomeCarousel />
      </section>

      {/* About Section */}
      <section className="about center">
        <div className="container">
          <div className="about-row center">
            <div className="about-col" id="img-col">
              <div className="col-img">
                <img src={about_img} className="rounded" alt="bodybuilder" />
              </div>
            </div>
            <div className="about-col" id="content-col">
              <div className="col-content">
                <div className="greet">
                  <p className="font-bold text-4xl py-4">Welcome to Flex Gym</p>
                </div>
                <div className="line">
                  <p className="font-medium text-slate-700 text-2xl">
                    We look forward to welcoming you to Flex Gym and supporting
                    you every step of the way on your fitness journey.
                  </p>
                </div>

                <div className="sublines">
                  <p className="py-2">
                    We understand that everyone &apos;s fitness goals and
                    aspirations are unique, which is why we offer a wide range
                    of workout programs, state-of-the-art equipment, and expert
                    trainers to cater to your individual needs. Whether you
                    &apos;re a beginner looking to kickstart your fitness
                    routine or an experienced athlete aiming to take your
                    performance to the next level, we have something for
                    everyone.
                  </p>
                  <p className="py-2">
                    Our mission is to create a welcoming and supportive
                    environment where you can challenge yourself, push your
                    limits, and discover your true potential. We believe that
                    fitness is not just about physical strength but also about
                    mental resilience and overall well-being. Through our
                    diverse classes, personalized training sessions, and
                    holistic approach, we strive to empower you to achieve a
                    balanced and healthy lifestyle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        className="services center py-5"
        style={{ backgroundColor: "rgb(34,36,41)" }}
      >
        <div className="container">
          <div className="heading center mb-5" id="services-heading">
            <h1
              className="text-4xl uppercase font-bold py-2 text-center"
              style={{ color: "orangered" }}
            >
              Fitness Offerings
            </h1>
          </div>
          <props.ServicesCard />
        </div>
      </section>

      {/* Memberships Section */}
      <section className="memberships center">
        <div className="container py-5">
          <div className="heading center">
            <h1
              className="text-4xl uppercase font-bold p-3"
              style={{ color: "orangered" }}
            >
              Memberships
            </h1>
          </div>
          <div className="membrshp-row center flex-wrap my-5">
            <div className="membrshp-col around flex-col">
              <div className="membrshp-title">
                <h3>Basic Membership</h3>
              </div>
              <div className="pricing">
                <h4 className="font-semibold" >
                  1000 DH/month
                </h4>
              </div>
              <div className="membrshp-text text-center">
                <p className="text-slate-700" style={{ color: "grey" }} >
                  Access to our state-of-the-art facilities, group fitness
                  classes, and cardio equipment.
                </p>
              </div>
            </div>
            <div className="membrshp-col around flex-col"
              style={{ scale: "1.1" }}
            >
              <span
                  style={{ 
                    backgroundColor: "orangered"}}
                  className="recommended-badge"
                >
                  Recommended
                </span>
              <div className="membrshp-title">
                <h3>Premium Membership</h3>
              </div>
              <div className="pricing">
                <h4 className="font-semibold" >
                  1600 DH/month
                </h4>
              </div>

              <div className="membrshp-text text-center">
                <p className="text-slate-700" style={{ color: "grey" }}>
                  All the benefits of basic membership, plus unlimited access to
                  specialized training areas and personal swimming sessions.
                </p>
              </div>
            </div>
            <div className="membrshp-col around flex-col">
              <div className="membrshp-title">
                <h3>Gold Membership</h3>
              </div>
              <div className="pricing">
                <h4 className="font-semibold" >
                  2000 DH/month
                </h4>
              </div>
              <div className="membrshp-text text-center">
                <p className="text-slate-700" style={{ color: "grey" }}>
                  Including all the benefits , exclusive access to premium amenities, and
                  priority registration for fitness workshops and events.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className="details-line p-5"
        style={{ backgroundColor: "rgb(34, 36, 41)", padding: "4rem 2rem" }}
      >
        <p style={{ color: "orangered" }} className=" text-2xl text-left p-2">
          Please note that specific details, pricing, and additional perks may
          vary. For complete membership information and to explore our offerings
          in more detail, we encourage you to contact our gym reception or visit
          our Gym Center.
        </p>

        <div className="contact-btn-container center mt-3">
          <Link to="/contact">
            <button
              className="px-8 py-4 text-white rounded"
              style={{ backgroundColor: "orangered" }}
            >
              Contact us
            </button>
          </Link>
        </div>
      </div>

      {/* Team Section */}
      <section className="team center">
        <div className="container">
          <div className="heading">
            <h1
              className="uppercase center text-xl font-bold"
              style={{ color: "orangered" }}
            >
              Our Team
            </h1>
          </div>
          <div className="sub-heading p-2 mb-5">
            <h1 className="uppercase center text-4xl font-bold">
              Expert Trainers
            </h1>
          </div>
          {/* Team Cards */}
          <props.TeamCard />
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
          Very simple process
        </h2>
        <p style={{ textAlign: "center", marginBottom: "2rem" }}>
          Order your card online and receive it in just 12 hours
        </p>
        <div className="process-steps" style={{ position: "relative" }}>
          {/* Modifie les balises 'div' avec la classe 'process-step' */}
          <div className="process-step">
            <div className="step-number">1</div>
            <h3 style={{ fontWeight: "bold", fontSize: "1.2rem" }}>Order</h3>
            <p>Order your subscription card on our website or via WhatsApp</p>
          </div>
          <div className="process-step">
            <div className="step-number">2</div>
            <h3 style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
              Confirmation
            </h3>
            <p>We confirm your order</p>
          </div>
          <div className="process-step">
            <div className="step-number">3</div>
            <h3 style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
              Delivery{" "}
            </h3>
            <p>Receive your card at home in just 12 hours</p>
          </div>
          <div className="process-step">
            <div className="step-number">4</div>
            <h3 style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
              Lifestyle
            </h3>
            <p>Enjoy a month's training at all our partner gyms</p>
          </div>
        </div>
      </section>

      {/* Bouton "Order Now" */}
      <div className="button-row mt-2" style={{ textAlign: "center" }}>
        <button className="carousel-btn rounded text-white orng-btn">
          <Link to="/register">Order Now</Link>
        </button>
      </div>

      {/* Frequently Asked Questions Section */}
      <section className="faq-section">
        <div className="container">
          <h2
            className="text-4xl font-bold uppercase"
            style={{ textAlign: "center", margin: "2rem 0" }}
          >
            Frequently Asked Questions
          </h2>
          <p style={{ textAlign: "center", marginBottom: "2rem" }}>
            We'd be delighted to answer any questions you may have, whether via
            WhatsApp, e-mail or phone. We're here to help! 🤝
          </p>
          <div className="faq">
            {[
              {
                question: "What is Flex Gym?",
                answer:
                  "FlexGym is the 100% Moroccan company that aims to make sports accessible to everyone, wherever you are. Our annual membership offers unlimited access to our partner gyms throughout Morocco. Simply present your membership card at the reception desk of each club where you wish to train, and you're ready to enjoy your workouts.",
              },
              {
                question: "How do I receive my card?",
                answer:
                  "As soon as your order is confirmed, whether by credit card, CashPlus or cash on delivery, we immediately put your card into preparation. We then entrust it to our delivery partner so that you can receive it within a maximum of 12 hours. So you can start enjoying all the benefits of your Flex Gym membership straight away.",
              },
              {
                question: "Is my membership valid in all gyms?",
                answer:
                  "Your Flex Gym membership gives you unrestricted access to all our partner gyms for as long as your membership is valid. Simply present your membership card at the reception desk of any affiliated facility for unlimited training. Take advantage of the variety and flexibility offered by our vast network of gyms to practice your physical activity wherever you are.",
              },
              {
                question: "Am I covered by insurance during my membership?",
                answer:
                  "Yes, your Flex Gym membership includes insurance. This insurance covers you during your training sessions in our partner gyms. So you can work out with peace of mind, knowing that you're protected in the event of any incidents or accidents during your sports sessions.",
              },
              {
                question: "Can I visit you in your office?",
                answer:
                  "Yes, we'd be delighted to meet you in person! Our headquarters are located in LOT NICE, CALIFORNIA, CASABLANCA. In addition, we are very active on social networks, and you can also contact us by phone, whether by call or WhatsApp message, at 0652520969. We look forward to welcoming you!",
              },
            ].map((item, index) => (
              <div key={index} className="faq-item">
                <div className="faq-question" onClick={() => toggleFaq(index)}>
                  <span>{item.question}</span>
                  <button className="faq-toggle">
                    {faqOpen === index ? "-" : "+"}
                  </button>
                </div>
                {faqOpen === index && (
                  <div className="faq-answer">{item.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Sponsors Section */}
      <section className="sponsors-section center">
        <div className="container">
          <div className="heading">
            <h1
              className="uppercase center text-xl font-bold"
              style={{ color: "orangered" }}
            >
              Our Sponsors
            </h1>
          </div>
          <div className="sub-heading p-2 mb-5">
            <h1 className="uppercase center text-4xl font-bold">
              Trusted by Leading Companies
            </h1>
          </div>
          <div className="sponsors-logos">
            <img src="../images/aws.avif" alt="AWS" />
            <img src="../images/dhl.avif" alt="DHL" />
            <img src="../images/puma.avif" alt="PUMA" />
            <img src="../images/heineken.avif" alt="HEINEKEN" />
            <img src="../images/pirelli.avif" alt="PIRELI" />
            <img src="../images/lenovo.avif" alt="LENOVO" />
            <img src="../images/crypto-partner.avif" alt="CRYPTO" />
            <img src="../images/RAM1.avif" alt="RAM" />
            <img src="../images/rolex.avif" alt="ROLEX" />
            <img src="../images/nike.jpeg" alt="NIKE" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
