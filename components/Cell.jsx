import React from "react";

const Cell = () => {
  return (
    <div className="cell">
      <div className="cell-color-box"></div>
      <div className="cell-price">Price: $20</div>
      <button className="btn-cell-buy">Buy</button>
    </div>
  );
};

export default Cell;
