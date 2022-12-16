import { createSlice } from "@reduxjs/toolkit";

const testSlice = createSlice({
  name: "test",
  initialState: {
    age: 18,
  },
  reducers: {
    addAge: (state, action) => {
      state.age += action.payload;
    },
  },
});

const { actions, reducer } = testSlice;

export const { addAge } = actions;

export const testSelector = (state) => state.age;

export default reducer;
