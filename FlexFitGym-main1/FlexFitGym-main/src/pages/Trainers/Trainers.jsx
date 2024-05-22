import "./Trainers.css";

const Trainers = (props) => {
  return (
    <div className="trainers-wrapper">
      {/* Banner Section */}
      <section className="trainers-banner banner">
        <div className="container center">
          <div className="banner-heading">
            <h1>Trainers</h1>
          </div>
        </div>
      </section>
      {/* Memberships Section */}
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
    </div>
  );
};

export default Trainers;
