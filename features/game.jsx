import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedFigure: "",
  diceNumber: 0,
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
  },
});

export const { updateSlectedFigure, updateDiceNumber } = gameSlice.actions;
export default gameSlice.reducer;
