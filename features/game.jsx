import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedFigure: "",
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
      if (state.playerOnCell > 17) {
        state.playerOnCell = state.playerOnCell - 18;
      }
    },

    updateMoneyAmount: (state, action) => {
      state.moneyAmount = action.payload;
    },

    updateBoughtStreets: (state, action) => {
      state.boughtStreets = action.payload;
    },
  },
});

export const {
  updateSlectedFigure,
  updateDiceNumber,
  updatePlayerOnCell,
  updateMoneyAmount,
  updateBoughtStreets
} = gameSlice.actions;
export default gameSlice.reducer;
