import React from "react";

const Heading = ({
  title,
  tagline,
  textColorTitle,
  textColorTagline,
  className,
}) => {
  return (
    <div className={`heading ${className}`}>
      <h2 className={`heading__title ${textColorTitle}`}>{title}</h2>
      <div className={`heading__tagline ${textColorTagline}`}>{tagline}</div>
    </div>
  );
};

export default Heading;
