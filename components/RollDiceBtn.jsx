import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateDiceNumber } from "../features/game";
import { updatePlayerOnCell } from "../features/game";
import { updateMoneyAmount } from "../features/game";

const RollDiceBtn = () => {
  const dispatch = useDispatch();
  const playerOnCellData = useSelector((state) => state.game.playerOnCell);
  const moneyAmountData = useSelector((state) => state.game.moneyAmount);

  const handleRollDiceClick = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    dispatch(updateDiceNumber(randomNumber));

    const newPlayerOnCell = playerOnCellData + randomNumber;

    if (newPlayerOnCell >= 18) {
      dispatch(updateMoneyAmount(moneyAmountData + 200));
      let newCircleResetValue = playerOnCellData + randomNumber - 18;
      dispatch(updatePlayerOnCell(newCircleResetValue));
    } else {
      dispatch(updatePlayerOnCell(newPlayerOnCell));
    }
  };

  return (
    <button onClick={handleRollDiceClick} className="btn-roll-dice">
      Roll Dice
    </button>
  );
};

export default RollDiceBtn;
