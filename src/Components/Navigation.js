import React from "react";
import logo from "../assets/images/logo.svg";
import { FaToggleOn } from "react-icons/fa";
import moon from "../assets/images/icon-moon.svg";

const Navigation = () => {
  return (
    <div>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <div>
          <select>
            <option>Sans Serif</option>
            <option>Serif</option>
            <option>Mono</option>
          </select>
        </div>
        <div className="h-8 w-px bg-kalas4 ml-2"></div>
        <div>
          <FaToggleOn />
        </div>
        <div>
          <img src={moon} alt="moon"/>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
