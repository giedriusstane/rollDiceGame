import React from "react";
import PlayerFigure from "./PlayerFigure";
import { useDispatch, useSelector } from "react-redux";
import { updateMoneyAmount } from "../features/game";
import { updateBoughtStreets } from "../features/game";

const Cell = ({ id, opacityPlayer, price, bgColor }) => {
  const moneyAmountData = useSelector((state) => state.game.moneyAmount);
  const boughtStreetsData = useSelector((state) => state.game.boughtStreets);
  const dispatch = useDispatch();

  const isStreetBought = boughtStreetsData.some(
    (street) => street.streetId === id
  );

  if (isStreetBought) {
    bgColor = "#CBCDCB";
  }

  const handleBuyClick = () => {
    if (opacityPlayer === 1 && moneyAmountData >= price) {
      dispatch(updateMoneyAmount(moneyAmountData - price));
      dispatch(
        updateBoughtStreets({
          streetId: id,
          streetPrice: price,
          streetColor: bgColor,
        })
      );
      console.log("bought");
    }
  };

  return (
    <div className="cell" id={id} style={{ backgroundColor: bgColor }}>
      <PlayerFigure opacityValue={opacityPlayer} />

      {isStreetBought && <div className="cell-sold">SOLD</div>}

      {!isStreetBought && (
        <div className="cell-content">
          <div className="cell-price">Price: ${price}</div>
          <button onClick={handleBuyClick} className="btn-cell-buy">
            Buy
          </button>
        </div>
      )}
    </div>
  );
};

export default Cell;
