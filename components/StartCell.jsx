import React from "react";
import PlayerFigure from "./PlayerFigure";

const StartCell = ({ opacityPlayer }) => {
  return (
    <div className="cell start-cell">Start
      <PlayerFigure opacityValue={opacityPlayer} />
    </div>
  );
};

export default StartCell;
