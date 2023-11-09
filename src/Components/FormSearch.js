import React, { useContext } from "react";
import search from "../assets/images/icon-search.svg";
import { ThemeContext } from "./ContextTheme";
import { DictionaryContext } from "./UserContext";

const FormSearch = () => {
  const { darkTheme } = useContext(ThemeContext);
  const { word, setWord, getDefinition } = useContext(DictionaryContext);

  const handleChange = (e) => {
    e.preventDefault();
    getDefinition();
    setWord("");
  };

  return (
    <div
      className={
        darkTheme
          ? "absolute mt-20 w-full lg:w-8/12"
          : "absolute mt-20 w-full lg:w-8/12"
      }
    >
      <div
        // onSubmit={handleChange}
        className={
          darkTheme
            ? "flex bg-kalas7 items-center h-12 rounded-xl justify-between mx-6"
            : "flex bg-kalas3 items-center h-12 rounded-xl justify-between mx-6"
        }
      >
        <input
          type="search"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          placeholder="Search for word"
          required
          className={
            darkTheme
              ? "bg-kalas7 font-fonty font-bold text-kalas1 ml-2 rounded h-12"
              : "bg-kalas3 font-fonty font-bold text-kalas8 ml-2 rounded h-12"
          }
        ></input>
        <img
          src={search}
          onClick={handleChange}
          alt="search"
          className={
            darkTheme ? "mx-3 bg-kalas7 h-4 max-w-md" : "mx-3 bg-kalas3 w-4 h-4"
          }
        />
      </div>
    </div>
  );
};

export default FormSearch;
