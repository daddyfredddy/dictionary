import React, { useContext } from "react";
import logo from "../assets/images/logo.svg";
import { FaToggleOff } from "react-icons/fa";
// import { FaToggleOn } from "react-icons/fa";
import moon from "../assets/images/icon-moon.svg";
import sun from "../assets/images/sun.svg";
import { ThemeContext } from "./ContextTheme";

const Navigation = () => {
  const { darkTheme, themeHandler } = useContext(ThemeContext);

  return (
    <div>
      <div
        className={
          darkTheme
            ? "w-11/12 h-8 mx-6 flex mt-6 absolute justify-between lg:w-7/12"
            : "w-11/12 h-8 mx-6 flex mt-6 absolute justify-between lg:w-7/12"
        }
      >
        <div>
          <img
            src={logo}
            alt="logo"
            className={darkTheme ? "w-7 h-8" : "w-7 h-8 text-kalas6"}
          />
        </div>
        <div className="flex justify-around gap-x-4 items-center">
          <div>
            <select
              className={darkTheme ? "text-kalas3" : "text-kalas8 bg-kalas1"}
            >
              <option>Sans Serif</option>
              <option>Serif</option>
              <option>Mono</option>
            </select>
          </div>
          <div
            className={darkTheme ? "h-8 w-px bg-kalas4" : "h-8 w-px bg-kalas6"}
          ></div>
          <div className="flex items-center">
            <div className="mx-3 cursor-pointer">
              <div>
                <span className="cursor-pointer">
                  <FaToggleOff
                    className={
                      darkTheme
                        ? "w-8 h-8 fill-kalas3 bg-kalas8"
                        : "w-8 h-8 fill-kalas9"
                    }
                    onClick={themeHandler}
                  />
                </span>
              </div>
            </div>
            <div>
              <img src={darkTheme ? moon : sun} alt="moon/sun" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
