import "./ServicesCard.css";
import { Link } from "react-router-dom";
import ServicesList from "../../api/ServicesList";

// Creating the ServicesCard component
const ServicesCard = () => {
  return (
    <div className="services-row center flex-wrap my-3">
      {/* Mapping over the ServicesList array */}
      {ServicesList.map((service) => {
        // Extracting data from each service object
        const { sid, simg, sname, sdesc, slink } = service;

        // Rendering the individual service card
        return (
          <div className="services-col around flex-col" key={sid}>
            <div className="col-icon">
              <img src={simg} alt="bodybuilding" />
            </div>
            <div className="col-heading text-center">
              <h1>{sname}</h1>
            </div>
            <div className="col-text">
              <p className="text-slate-700">{sdesc}</p>
            </div>
            <div className="col-link">
              <Link to={slink}>Read More &#8811;</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServicesCard;
