import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedFigure: "",
};

export const gameSlice = createSlice({
  name: "game",
  initialState,

  reducers: {
    updateSlectedFigure: (state, action) => {
      state.selectedFigure = action.payload;
    },
  },
});

export const { updateSlectedFigure } = gameSlice.actions;
export default gameSlice.reducer;
