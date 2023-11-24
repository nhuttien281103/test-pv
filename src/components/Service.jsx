import React from "react";

const Service = ({ title, desc, image }) => {
  return (
    <div className="service">
      <img src={image} alt={title} />
      <div className="service__content">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Service;
