import React from "react";
import { Link } from "react-router-dom";
import FigureSelector from "../components/FigureSelector";

const StartPage = () => {
  return (
    <div className="start-game-container">
      <FigureSelector />
      <Link to={"/game"}>
        <button className="btn-start-game">Start Game</button>
      </Link>
    </div>
  );
};

export default StartPage;
