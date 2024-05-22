import "./About.css";
import about_img from "/images/about-bodybuilder-image.jpg";

const About = (props) => {
  return (
    <div className="about-wrapper">
      <section className="about-banner banner">
        <div className="container center flex-col">
          <div className="banner-heading">
            <h1>About us</h1>
          </div>
        </div>
      </section>

      {/*About Intro*/}
      <section className="about center">
        <div className="container">
          <div className="about-row flex">
            <div className="about-col" id="img-col">
              <div className="col-img">
                <img src={about_img} className="rounded" alt="bodybuilder" />
              </div>
            </div>
            <div className="about-col" id="content-col">
              <div className="col-content">
                <div className="heading">
                  <h4
                    className="text-xl font-bold uppercase"
                    style={{ color: "orangered" }}
                  >
                    About us
                  </h4>
                </div>
                <div className="greet">
                  <p className="font-bold text-4xl py-4">
                    Welcome to Flex Gym
                  </p>
                </div>
                <div className="line">
                  <p className="font-medium text-slate-700 text-2xl">
                    Empowering Your Fitness Journey
                  </p>
                </div>

                <div className="sublines">
                  <p className="mt-2">
                    Welcome to FlexGym, where we believe that fitness is not
                    just a destination but a lifelong journey. We are dedicated
                    to empowering individuals of all fitness levels to reach
                    their goals, exceed their expectations, and unlock their
                    full potential. Our mission is to provide a comprehensive
                    and transformative fitness experience that goes beyond
                    ordinary gyms.
                  </p>
                  <p className="mb-2">
                    At FlexGym, we believe that fitness is not just a
                    destination but a lifelong journey. We are dedicated to
                    empowering individuals of all fitness levels to reach their
                    goals, exceed their expectations, and unlock their full
                    potential. With our state-of-the-art facilities, expert
                    trainers, and a vibrant community, we provide an
                    unparalleled fitness experience that goes beyond ordinary
                    gyms.
                  </p>
                  <p className="py-2">
                    Our mission is to inspire and guide our members to adopt a
                    healthy and active lifestyle. We strive to create a
                    supportive environment where everyone feels welcome,
                    motivated, and empowered to transform their lives through
                    fitness. Whether you &apos;re a seasoned athlete or just
                    starting on your fitness journey, FlexGym is here to help
                    you achieve lasting results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Services Section*/}
      <section
        className="services center py-5"
        style={{ backgroundColor: "rgb(34,36,41)" }}
      >
        <div className="container">
          <div className="heading center mb-5">
            <h1
              className="text-4xl uppercase font-bold text-center"
              style={{ color: "orangered" }}
            >
              Fitness Offerings
            </h1>
          </div>

          <props.ServicesCard />
        </div>
      </section>

      {/*Memberships Section*/}
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
            <h1 className="uppercase text-center text-4xl font-bold">
              Expert Trainers
            </h1>
          </div>
          {/*Team Cards*/}
          <props.TeamCard />
        </div>
      </section>
    </div>
  );
};

export default About;
