import React from "react";
import { iconsOptions } from "../utils/dummy";

const OptionMenu = () => {
  return (
    <div className="option">
      {iconsOptions.map((option, index) => {
        return <i key={index} className={`ti ${option.icon}`}></i>;
      })}
    </div>
  );
};

export default OptionMenu;
