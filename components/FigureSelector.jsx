import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSlectedFigure } from "../features/game";

const FigureSelector = () => {
  const dispatch = useDispatch();
  const selectedFigureData = useSelector((state) => state.game.selectedFigure);

  const figureImgArr = [
    {
      img: "https://i.pinimg.com/originals/76/7b/90/767b90683f1100ae7879be71bfb80193.jpg",
      alt: "dog-figure-image",
    },
    {
      img: "https://pro2-bar-s3-cdn-cf4.myportfolio.com/ea89dba7f1114cfb6a47fb478412a1cc/55c0e684-c045-4a3c-9429-2fe1ad417b8d_rw_1920.jpg?h=0d7ecc7dcda59dc5a87643123729c796",
      alt: "car-figure-image",
    },
    {
      img: "https://coolmaterial.com/wp-content/uploads/2016/05/monopoly-battleship-piece.jpg",
      alt: "ship-figure-image",
    },
    {
      img: "https://coolmaterial.com/wp-content/uploads/2016/05/monopoly-top-hat.jpg",
      alt: "hat-figure-image",
    },
  ];

  const handleSelectClick = (e) => {
    dispatch(updateSlectedFigure(e.currentTarget.src));
  };

  return (
    <div className="figures-box">
      {figureImgArr.map((figureImg, index) => (
        <img
          key={index}
          onClick={handleSelectClick}
          className={
            selectedFigureData === figureImg.img
              ? "figure figure-selected"
              : "figure"
          }
          src={figureImg.img}
          alt={figureImg.alt}
        />
      ))}
    </div>
  );
};

export default FigureSelector;
