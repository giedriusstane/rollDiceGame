import React from "react";
import Cell from "./Cell";
import Dice from "./Dice";
import RollDiceBtn from "./RollDiceBtn";
import StartCell from "./StartCell";
import { useSelector } from "react-redux";

const MainGameBoard = () => {
  const playerOnCellData = useSelector((state) => state.game.playerOnCell);
  
 

  const cellData = [
    { id: "c-0", price: 150, bgColor: "#f44336" },
    { id: "c-1", price: 200, bgColor: "#e81e63" },
    { id: "c-2", price: 45, bgColor: "#9c27b0" },
    { id: "c-3", price: 30, bgColor: "#673ab7" },
    { id: "c-4", price: 80, bgColor: "#3f51b5" },
    { id: "c-5", price: 1000, bgColor: "#03a9f4" },
    { id: "c-6", price: 400, bgColor: "#2196f3" },
    { id: "c-7", price: 85, bgColor: "#00bcd4" },
    { id: "c-8", price: 50, bgColor: "#009688" },
    { id: "c-9", price: 20, bgColor: "#4caf50" },
    { id: "c-10", price: 150, bgColor: "#8bc34a" },
    { id: "c-11", price: 250, bgColor: "#cddc39" },
    { id: "c-12", price: 300, bgColor: "#ffeb3b" },
    { id: "c-13", price: 450, bgColor: "#ffc107" },
    { id: "c-14", price: 800, bgColor: "#ff9800" },
    { id: "c-15", price: 2000, bgColor: "#ff5722" },
    { id: "c-16", price: 75, bgColor: "#fc2099" },
  ];

  return (
    <div className="main-game-board">
      <div className="box-1">
        <StartCell opacityPlayer={playerOnCellData === 0 ? 1 : 0} />
        {cellData.slice(0, 6).map((cell, index) => (
          <Cell
            key={index}
            id={cell.id}
            opacityPlayer={playerOnCellData === index + 1 ? 1 : 0}
            price={cell.price}
            bgColor={cell.bgColor}
          />
        ))}
      </div>
      <div className="box-2">
        {cellData.slice(6, 8).map((cell, index) => (
          <Cell
            key={index}
            id={cell.id}
            opacityPlayer={playerOnCellData === index + 7 ? 1 : 0}
            price={cell.price}
            bgColor={cell.bgColor}
          />
        ))}
      </div>
      <div className="box-3">
        {cellData.slice(15, 17).map((cell, index) => (
          <Cell
            key={index}
            id={cell.id}
            opacityPlayer={playerOnCellData === index + 16 ? 1 : 0}
            price={cell.price}
            bgColor={cell.bgColor}
          />
        ))}
      </div>
      <div className="box-4">
        {cellData.slice(8, 15).map((cell, index) => (
          <Cell
            key={index}
            id={cell.id}
            opacityPlayer={playerOnCellData === index + 9 ? 1 : 0}
            price={cell.price}
            bgColor={cell.bgColor}
          />
        ))}
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
