import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedFigure:
    "https://i.pinimg.com/originals/76/7b/90/767b90683f1100ae7879be71bfb80193.jpg",
  diceNumber: 0,
  playerOnCell: 0,
  moneyAmount: 100,
  boughtStreets: [],
};

export const gameSlice = createSlice({
  name: "game",
  initialState,

  reducers: {
    updateSlectedFigure: (state, action) => {
      state.selectedFigure = action.payload;
    },

    updateDiceNumber: (state, action) => {
      state.diceNumber = action.payload;
    },

    updatePlayerOnCell: (state, action) => {
      state.playerOnCell = action.payload;
      // if (state.playerOnCell > 17) {
      //   state.playerOnCell = state.playerOnCell - 18;

      // }
    },

    updateMoneyAmount: (state, action) => {
      state.moneyAmount = action.payload;
    },

    updateBoughtStreets: (state, action) => {
      state.boughtStreets.push(action.payload);
    },

    removeBoughtStreets: (state, action) => {
      state.boughtStreets = action.payload;
    },
  },
});

export const {
  updateSlectedFigure,
  updateDiceNumber,
  updatePlayerOnCell,
  updateMoneyAmount,
  updateBoughtStreets,
  removeBoughtStreets,
} = gameSlice.actions;
export default gameSlice.reducer;
