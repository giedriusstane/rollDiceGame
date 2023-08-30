import { useSelector } from "react-redux";

const PlayerFigure = ({ opacityValue }) => {
  const figureImagData = useSelector((state) => state.game.selectedFigure);

  return (
    <img
      src={figureImagData}
      className="player-figure"
      style={{ opacity: opacityValue }}
    />
  );
};

export default PlayerFigure;
