import React, { useContext } from "react";
import { ThemeContext } from "./ContextTheme";
import play from "../assets/images/icon-play.svg";
import newwindow from "../assets/images/icon-new-window.svg";
import { TbOvalVerticalFilled } from "react-icons/tb";
import { DictionaryContext } from "./UserContext";

const UserCard = () => {
  const { darkTheme } = useContext(ThemeContext);
  const { words } = useContext(DictionaryContext);

  return (
    <div
      className={
        darkTheme
          ? "absolute mt-40 bg-kalas8 "
          : "absolute mt-40 kalas1 lg:w-10/12"
      }
    >
      <div className="flex justify-between mx-6 items-center lg:w-9/12">
        {words && (
          <div>
            <h1
              className={
                darkTheme
                  ? "font-fonty font-bold text-2xl leading-10"
                  : "font-fonty font-bold text-2xl leading-10 text-kalas8"
              }
            >
              {words.word}
            </h1>
            <p className="font-fonty font-normal text-lg text-kalas9">
              {words.phonetic}
            </p>
          </div>
        )}
        <img src={play} alt="play button" className="w-12 h-12 ml-6"></img>
      </div>

      <div className="flex items-center ml-6">
        <h3
          className={
            darkTheme
              ? "font-fonty font-bold italic text-lg"
              : "font-fonty font-bold italic text-lg text-kalas8"
          }
        >
          Noun
        </h3>
        <div className="w-full h-px bg-kalas6 ml-3 mr-6 lg:w-8/12"></div>
      </div>
      <div>
        <p className="font-fonty font-normal text-kalas5 ml-6 leaing-5 my-2">
          Meaning
        </p>
      </div>
      <div>
        <p
          className={
            darkTheme
              ? "font-fonty font-normal leading-6 text-kalas3 ml-6"
              : "font-fonty font-normal leading-6 text-kalas8 ml-6"
          }
        >
          <div className="flex">
            <span className="text-kalas11 mt-1">
              <TbOvalVerticalFilled />
            </span>
            <p className="ml-4">
              (etc) A set of keys used to operate a typewriter, computer etc.
            </p>
          </div>
          <br />
          {/* <br /> */}
          <div className="flex">
            <span className="text-kalas11 mt-1 w-1">
              <TbOvalVerticalFilled />
            </span>
            <p className="ml-4">
              A component of many instruments including the piano, organ, and
              harpsichord consisting of usually black and white keys that cause
              different tones to be produced when struck.
            </p>
          </div>
          <br />
          {/* <br /> */}
          <div className="flex">
            <span className="text-kalas11 mt-1">
              <TbOvalVerticalFilled />
            </span>
            <p className="ml-4">
              A device with keys of a musical keyboard, used to control
              electronic sound-producing devices which may be built into or
              separate from the keyboard.
            </p>
          </div>
        </p>
        <div className="ml-6 flex mt-3">
          <p className="font-fonty font-normal text-base text-kalas5">
            Synonyms
          </p>
          <p className="font-fonty font-bold text-base text-kalas9 ml-4 ">
            electronic keyboard
          </p>
        </div>
      </div>
      <div className="flex items-center ml-6 my-3">
        <h3
          className={
            darkTheme
              ? "font-fonty font-bold italic text-lg text-kalas3 "
              : "font-fonty font-bold italic text-lg text-kalas8 "
          }
        >
          verb
        </h3>
        <div className="w-full h-px bg-kalas6 ml-3 mr-6 lg:w-8/12"></div>
      </div>
      <div>
        <p className="font-fonty font-normal text-kalas5 ml-6 leaing-5 my-2">
          Meaning
        </p>
        <div>
          <div className="ml-6">
            <div className="flex">
              <span className="text-kalas11 mt-1">
                <TbOvalVerticalFilled />
              </span>
              <p
                className={
                  darkTheme
                    ? "ml-2 font-fonty font-normal text-kalas3 leading-6"
                    : "ml-2 font-fonty font-normal text-kalas8 leading-6"
                }
              >
                To type on a computer keyboard.
              </p>
            </div>

            <p className="font-fonty font-normal text-kalas5 ml-6 leading-6 my-2">
              "Keyboarding is the part of this job I hate the most."
            </p>
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-kalas6 ml-6 my-6 lg:w-9/12"></div>
      <div>
        <p className="font-fonty font-normal text-kalas5 ml-6 leading-4">
          Source
        </p>
        <div className="w-14 h-px bg-kalas6 ml-6"></div>
        <div className="flex mb-6 ">
          <p
            className={
              darkTheme
                ? "font-fonty font-normal text-kalas3 ml-6 leading-4 mt-2"
                : "font-fonty font-normal text-kalas8 ml-6 leading-4 mt-2"
            }
          >
            https://en.wiktionary.org/wiki/keyboard
          </p>
          {/* <div className="w-14 h-px bg-kalas6 ml-6"></div> */}
          <img
            src={newwindow}
            alt="newwindow"
            className="w-3 h-3 ml-2 text-kalas5"
          />
        </div>
      </div>
    </div>
  );
};

export default UserCard;
