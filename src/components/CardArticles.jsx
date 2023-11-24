/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const CardArticles = () => {
  return (
    <div className="post">
      <img
        src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/photo-1469920783271-4ee08a94d42d-960x636.jpg"
        alt=""
      />
      <div className="post__content">
        <p className="post__date">DECEMBER 10, 2016</p>
        <h3 className="post__title">
          Memorial Day to Someone Told Me to Travel
        </h3>
        <p className="post__desc">
          Meh synth Schlitz, tempor duis single-origin coffee ea next level
          ethnic fingerstache...
        </p>
        <a href="" className="post__readmore">
          <span>Read More</span>
          <i className="ti ti-angle-right"></i>
        </a>
      </div>
    </div>
  );
};

export default CardArticles;
