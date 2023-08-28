import React from "react";
import { useDispatch } from "react-redux";
import { updateDiceNumber } from "../features/game";

const RollDiceBtn = () => {
  const dispatch = useDispatch();

  const handleRollDiceClick = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    dispatch(updateDiceNumber(randomNumber));
  };

  return (
    <button onClick={handleRollDiceClick} className="btn-roll-dice">
      Roll Dice
    </button>
  );
};

export default RollDiceBtn;
