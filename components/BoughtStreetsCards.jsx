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
        {/* {boughtStreetsData.map((street) => (
          <div>{street.streetColor}</div>
        ))} */}
      </div>
    </div>
  );
};

export default BoughtStreetsCards;
