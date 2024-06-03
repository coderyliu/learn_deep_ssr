import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "home",
  initialState: {
    counter: 0
  },
  reducers: {
    increment(state, { payload }) {
      state.counter = state.counter + 1;
    },
    decrement(state, { payload }) {
      state.counter = state.counter - 1;
    }
  }
});

export const { increment, decrement } = homeSlice.actions;

export default homeSlice.reducer;
