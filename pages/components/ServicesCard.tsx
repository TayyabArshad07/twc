import React from "react";
import { FaCode } from "react-icons/fa";

const ServicesCard = () => {
  return (
    <div className="service-card">
      <div className="service-card-content">
        <FaCode />
        <h3>Web Development</h3>
        <p>Write something about Web Development.</p>
        <button className="details-button">See Details </button>
      </div>
    </div>
  );
};

export default ServicesCard;
