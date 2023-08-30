import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeBoughtStreets } from "../features/game";
import { updateMoneyAmount } from "../features/game";

const BoughtStreetsCards = () => {
  const moneyAmountData = useSelector((state) => state.game.moneyAmount);
  const boughtStreetsData = useSelector((state) => state.game.boughtStreets);

  const dispatch = useDispatch();

  const handleSellBtnClick = (e) => {
    const streetIdToRemove = e.currentTarget.parentElement.id;

    const newBoughtStreets = boughtStreetsData.filter(
      (street) => street.streetId !== streetIdToRemove
    );

    const soldStreet = boughtStreetsData.find(
      (street) => street.streetId === streetIdToRemove
    );
    const soldStreetPrice = soldStreet ? soldStreet.streetPrice : 0;

    dispatch(removeBoughtStreets(newBoughtStreets));
    dispatch(updateMoneyAmount(moneyAmountData + soldStreetPrice / 2));
  };

  return (
    <div>
      <div className="money">Money: ${moneyAmountData}</div>
      <div className="bought-streets-cards">
        {boughtStreetsData.map((street, index) => (
          <div
            className="bought-street-box"
            key={index}
            id={street.streetId}
            style={{ backgroundColor: street.streetColor }}
          >
            <div className="cell-price">${street.streetPrice / 2}</div>
            <button className="btn-cell-sell" onClick={handleSellBtnClick}>
              Sell
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoughtStreetsCards;
