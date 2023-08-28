import React from "react";
import Cell from "./Cell";
import Dice from "./Dice";
import RollDiceBtn from "./RollDiceBtn";

const MainGameBoard = () => {
  return (
    <div className="main-game-board">
      <div className="box-1">
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
      </div>
      <div className="box-2">
        <Cell />
        <Cell />
      </div>
      <div className="box-3">
        <Cell />
        <Cell />
      </div>
      <div className="box-4">
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
      </div>
      <div className="box-5">
        <Dice />
      </div>
      <div className="box-6">
        <RollDiceBtn />
      </div>
    </div>
  );
};

export default MainGameBoard;
