import React from "react";
import "./Score.css";
import logo from "../../images/logo.svg";

const Score = () => {
  return (
    <div className="scoreContainer">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="score">
        <h3>Score</h3>
        <p id="scoreValue">12</p>
      </div>
    </div>
  );
};

export default Score;
