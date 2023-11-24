import { Rating } from "@mui/material";
import React from "react";

const CardTrips = ({
  image,
  price,
  priceOld,
  title,
  desc,
  rate,
  view,
  day,
}) => {
  return (
    <div className="trips">
      <div className="trips__image">
        <img src={image} alt="" />
        <div className="trips__price">
          {priceOld && <p className="trips__price-old">${priceOld}</p>}
          <span>${price}</span>
        </div>
      </div>
      <div className="trips__content">
        <h3 className="trips__title">{title}</h3>
        <p>{desc}</p>
        <div className="trips__rate">
          <div className="trips__rate-left">
            <Rating
              name="half-rating"
              style={{ color: "#1EC6B6", fontSize: "17px" }}
              defaultValue={rate}
              precision={0.5}
            />
            <span>{view} reviews</span>
          </div>
          <div className="trips__rate-right">
            <i className="ti ti-alarm-clock"></i>
            <span>{day} days</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTrips;
