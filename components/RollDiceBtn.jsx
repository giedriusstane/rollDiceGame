import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateDiceNumber } from "../features/game";
import { updatePlayerOnCell } from "../features/game";
import { updateMoneyAmount } from "../features/game";

const RollDiceBtn = () => {
  const dispatch = useDispatch();
  const playerOnCellData = useSelector((state) => state.game.playerOnCell);
  const moneyAmountData = useSelector((state) => state.game.moneyAmount);

  const [movesCount, setMovesCount] = useState(0);

  const handleRollDiceClick = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    setMovesCount(movesCount + randomNumber);
    dispatch(updateDiceNumber(randomNumber));
    dispatch(updatePlayerOnCell(playerOnCellData + randomNumber));
  };

  useEffect(() => {
    //console.log(playerOnCellData);
    if (movesCount > 17) {
      dispatch(updateMoneyAmount(moneyAmountData + 200));
      setMovesCount(0);
    }
    console.log("moneyy", moneyAmountData);
    console.log("moves", movesCount);
  }, [playerOnCellData]);

  return (
    <button onClick={handleRollDiceClick} className="btn-roll-dice">
      Roll Dice
    </button>
  );
};

export default RollDiceBtn;
