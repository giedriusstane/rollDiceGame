import React from "react";
import MainGameBoard from "../components/MainGameBoard";
import BoughtStreetsCard from "../components/BoughtStreetsCards";

const GamePage = () => {
  return (
    <div className="game-page-container">
      <MainGameBoard />
      <BoughtStreetsCard />
    </div>
  );
};

export default GamePage;
