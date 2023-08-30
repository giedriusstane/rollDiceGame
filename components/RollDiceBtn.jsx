import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateDiceNumber } from "../features/game";
import { updatePlayerOnCell } from "../features/game";
import { updateMoneyAmount } from "../features/game";

const RollDiceBtn = () => {
  const dispatch = useDispatch();
  const playerOnCellData = useSelector((state) => state.game.playerOnCell);
  const moneyAmountData = useSelector((state) => state.game.moneyAmount);

  // const [movesCount, setMovesCount] = useState(0);

  const handleRollDiceClick = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    dispatch(updateDiceNumber(randomNumber));

    const newPlayerOnCell = playerOnCellData + randomNumber;

    if (newPlayerOnCell >= 18) {
      dispatch(updateMoneyAmount(moneyAmountData + 200));
      let newCircleResetValue =  (playerOnCellData + randomNumber) -18 ;
      dispatch(updatePlayerOnCell(newCircleResetValue));
    } else {
      dispatch(updatePlayerOnCell(newPlayerOnCell));
    }
  };

  useEffect(() => {
    console.log(playerOnCellData);
  }, [playerOnCellData]);
  //------------------------------------------------------------------------------------

  // const handleRollDiceClick = () => {
  //   let randomNumber = Math.floor(Math.random() * 6) + 1;
  //   setMovesCount(movesCount + randomNumber);
  //   dispatch(updateDiceNumber(randomNumber));
  //   dispatch(updatePlayerOnCell(movesCount + randomNumber));

  // };

  // useEffect(() => {
  //   console.log(movesCount);
  //   if (movesCount >= 18) {
  //     dispatch(updateMoneyAmount(moneyAmountData + 200));
  //     console.log("add $200");
  //     setMovesCount(0);
  //   }
  //   //console.log("moneyy", moneyAmountData);
  // }, [playerOnCellData]);

  return (
    <button onClick={handleRollDiceClick} className="btn-roll-dice">
      Roll Dice
    </button>
  );
};

export default RollDiceBtn;
