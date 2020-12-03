import React from "react";
import rule from "../../images/image-rules.svg";
import close from "../../images/icon-close.svg";
import "./Rules.css";

const Rules = () => {
  const displayRule = () => {
    document.querySelector(".ruleBox").style.display = "block";
  };

  const hideRule = () => {
    document.querySelector(".ruleBox").style.display = "none";
  };
  return (
    <div className="ruleContainer">
      <button onClick={displayRule} className="rule-btn">
        Rules
      </button>
      <div className="ruleBox">
        <div className="ruleIcon">
          <h2>Rules</h2>
          <button onClick={hideRule}>
            <img src={close} alt="close button" />
          </button>
        </div>
        <img src={rule} alt="Rules of the game" class="ruleImg" />
      </div>
    </div>
  );
};

export default Rules;
