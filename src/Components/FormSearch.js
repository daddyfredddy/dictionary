import React from "react";
import search from "../assets/images/icon-search.svg";

const FormSearch = () => {
  return (
    <div>
      <div>
        <input type="text" placeholder="Keyboard"></input>
      </div>
      <div>
        <img src={search} alt="search" />
      </div>
    </div>
  );
};

export default FormSearch;
