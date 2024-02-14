import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0, items: [] };

export const itemSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    adding: (state, action) => {
      state.value++;
      state.items.push(action.payload);
    },
  },
});

export const { adding } = itemSlice.actions;

export default itemSlice.reducer;
