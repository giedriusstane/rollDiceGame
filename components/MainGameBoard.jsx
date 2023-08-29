import React from "react";
import Cell from "./Cell";
import Dice from "./Dice";
import RollDiceBtn from "./RollDiceBtn";
import StartCell from "./StartCell";
import { useSelector } from "react-redux";

const MainGameBoard = () => {
  const playerOnCellData = useSelector((state) => state.game.playerOnCell);

  return (
    <div className="main-game-board">
      <div className="box-1">
        <StartCell opacityPlayer={playerOnCellData === 0 ? 1 : 0} />
        <Cell
          id="c-0"
          opacityPlayer={playerOnCellData === 1 ? 1 : 0}
          price={15}
          bgColor={"#CDB4DB"}
        />
        <Cell
          id="c-1"
          opacityPlayer={playerOnCellData === 2 ? 1 : 0}
          price={45}
          bgColor={"#FFC8DD"}
        />
        <Cell
          id="c-2"
          opacityPlayer={playerOnCellData === 3 ? 1 : 0}
          price={100}
          bgColor={"#FFAFCC"}
        />
        <Cell
          id="c-3"
          opacityPlayer={playerOnCellData === 4 ? 1 : 0}
          price={200}
          bgColor={"#BDE0FE"}
        />
        <Cell
          id="c-4"
          opacityPlayer={playerOnCellData === 5 ? 1 : 0}
          price={1000}
          bgColor={"#D8F3DC"}
        />
        <Cell
          id="c-5"
          opacityPlayer={playerOnCellData === 6 ? 1 : 0}
          price={75}
          bgColor={"#95D5B2"}
        />
      </div>
      <div className="box-2">
        <Cell
          id="c-6"
          opacityPlayer={playerOnCellData === 17 ? 1 : 0}
          price={30}
          bgColor={"#2D6A4F"}
        />
        <Cell
          id="c-7"
          opacityPlayer={playerOnCellData === 16 ? 1 : 0}
          price={80}
          bgColor={"#7B2CBF"}
        />
      </div>
      <div className="box-3">
        <Cell
          id="c-8"
          opacityPlayer={playerOnCellData === 7 ? 1 : 0}
          price={50}
          bgColor={"#9B2226"}
        />
        <Cell
          id="c-9"
          opacityPlayer={playerOnCellData === 8 ? 1 : 0}
          price={400}
          bgColor={"#BB3E03"}
        />
      </div>
      <div className="box-4">
        <Cell
          id="c-10"
          opacityPlayer={playerOnCellData === 15 ? 1 : 0}
          price={20}
          bgColor={"#FB8500"}
        />
        <Cell
          id="c-11"
          opacityPlayer={playerOnCellData === 14 ? 1 : 0}
          price={250}
          bgColor={"#FD9E02"}
        />
        <Cell
          id="c-12"
          opacityPlayer={playerOnCellData === 13 ? 1 : 0}
          price={600}
          bgColor={"#FFB703"}
        />
        <Cell
          id="c-13"
          opacityPlayer={playerOnCellData === 12 ? 1 : 0}
          price={110}
          bgColor={"#023047"}
        />
        <Cell
          id="c-14"
          opacityPlayer={playerOnCellData === 11 ? 1 : 0}
          price={150}
          bgColor={"#126782"}
        />
        <Cell
          id="c-15"
          opacityPlayer={playerOnCellData === 10 ? 1 : 0}
          price={45}
          bgColor={"#219EBC"}
        />
        <Cell
          id="c-16"
          opacityPlayer={playerOnCellData === 9 ? 1 : 0}
          price={85}
          bgColor={"#3C096C"}
        />
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
