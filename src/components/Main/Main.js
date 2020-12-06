import React from "react";
import Paper from "../../images/icon-paper.svg";
import Scissors from "../../images/icon-scissors.svg";
import Rock from "../../images/icon-rock.svg";
import Score from "../Score/Score";
import "./Main.css";

const chooseOptions = ["paper", "rock", "scissors"];

const randomChoice = () => {
  return chooseOptions[Math.floor(Math.random() * chooseOptions.length)];
};

const buttons = document.querySelectorAll(".icon-btn");

const choiceByUser = () => {
  let userChoice = undefined;
  buttons.forEach(function (btn) {
    userChoice = btn.getAttribute("data-option");
    console.log(userChoice);
  });
};
const Main = () => {
  return (
    <div className="container">
      <Score />
      <div className="btn">
        <button
          className="icon-btn paper"
          data-option="paper"
          onClick={choiceByUser}
        >
          <span className="contain">
            <img src={Paper} alt="icon of paper" id="paper" />
          </span>
        </button>
        <button
          className="icon-btn scissors"
          data-option="scissors"
          onClick={choiceByUser}
        >
          <span className="contain">
            <img src={Scissors} alt="icon of scissiors" id="scissors" />
          </span>
        </button>
        <button
          className="icon-btn rock"
          data-option="rock"
          onClick={choiceByUser}
        >
          <span className="contain">
            <img src={Rock} alt="icon of rock" id="rock" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Main;
