import React from "react";

const TourPopular = ({ image, textDisplay }) => {
  return (
    <div className="popular">
      <img src={image} alt={textDisplay} />
      <div className="popular__overlay"></div>
      <div className="popular__info">
        <h3>{textDisplay}</h3>
      </div>
    </div>
  );
};

export default TourPopular;
