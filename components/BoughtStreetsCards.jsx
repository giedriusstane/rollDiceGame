import React from "react";
import { useSelector } from "react-redux";

const BoughtStreetsCards = () => {
  const moneyAmountData = useSelector((state) => state.game.moneyAmount);
  const boughtStreetsData = useSelector((state) => state.game.boughtStreets);
  console.log(boughtStreetsData);

  return (
    <div>
      <div className="money">Money: ${moneyAmountData}</div>
      <div className="bought-streets-cards">
        {boughtStreetsData.map((street, index) => (
          <div
            className="bought-street-box"
            key={index}
            style={{ backgroundColor: street.streetColor }}
          >
            <div>${street.streetPrice}</div>
            <button>Sell</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoughtStreetsCards;
