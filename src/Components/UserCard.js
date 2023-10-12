import React from "react";
import play from "../assets/images/icon-play.svg";
import newwindow from "../assets/images/icon-new-window.svg";

const UserCard = () => {
  return (
    <div>
      <div>
        <h1>Keyboard</h1>
        <p>/'ki:bc:d/</p>
      </div>
      <div>
        <img src={play} alt="play button" />
      </div>
      <div>
        <h3>noun</h3>
        <div className="w-64 h-px bg-kalas6"></div>
      </div>
      <div>
        <p>Meaning</p>
      </div>
      <div>
        <p>
          . (etc) A set of keys used to operate a typewriter, computer etc.
          <br />
          <br />
          .A component of many instruments including the piano, organ, and
          harpsichord consisting of usually black and white keys that cause
          different tones to be produced when struck. <br />
          <br />. A device with keys of a musical keyboard, used to control
          electronic sound-producing devices which may be built into or separate
          from the keyboard.
        </p>
      </div>
      <div>
        <div>
          <h3>verb</h3>
          <div className="w-64 h-px bg-kalas6"></div>
        </div>
        <div>
          <p>Meaning</p>
        </div>
        <div>
          . To type on a computer keyboard. <br /> "Keyboarding is the part of
          this job I hate the most."
        </div>
      </div>
      <div className="w-64 h-px bg-kalas6"></div>
      <div>
        <p>Source</p>
        <div className="w-64 h-px bg-kalas6"></div>
        <div>
          <p>https://en.wiktionary.org/wiki/keyboard</p>
          <img src={newwindow} alt="newwindow" />
        </div>
      </div>
    </div>
  );
};

export default UserCard;
