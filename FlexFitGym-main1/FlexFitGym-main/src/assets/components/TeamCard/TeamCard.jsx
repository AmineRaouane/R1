import "./TeamCard.css";
import TeamList from "../../api/TeamList";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

// Creating the TeamCard component
const TeamCard = () => {
  return (
    <div className="team-row around flex-wrap">
      {/* Mapping over the TeamList array */}
      {TeamList.map((team) => {
        // Extracting data from each team object
        const { tid, tname, timg, tpost, fb, twitter, insta } = team;

        // Rendering the individual team card
        return (
          <div className="team-col" key={tid}>
            <div className="team-img">
              <img src={timg} alt="Kuldeep Singh" />
            </div>

            <div className="team-overlay center">
              <div className="team-handles flex">
                <div className="handle-icon">
                  {/* Link to Facebook */}
                  <Link to={fb}>
                    <FaFacebook />
                  </Link>
                </div>
                <div className="handle-icon">
                  {/* Link to Instagram */}
                  <Link to={insta}>
                    <FaInstagram />
                  </Link>
                </div>
                <div className="handle-icon">
                  {/* Link to Twitter */}
                  <Link to={twitter}>
                    <FaTwitter />
                  </Link>
                </div>
              </div>
            </div>
            <div className="team-desc">
              <div className="team-name">
                <h1 className="font-bold text-3xl text-white text-center uppercase">
                  {/* Team member name */}
                  {tname}
                </h1>
              </div>
              <div className="team-post">
                <h4 className="text-2xl uppercase center text-white">
                  {/* Team member position */}
                  {tpost}
                </h4>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TeamCard;
