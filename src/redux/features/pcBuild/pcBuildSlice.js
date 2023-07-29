import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addedToBuild: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setAddedToBuild: (state, action) => {
      state.addedToBuild.push(action.payload);
    },
  },
});

export const { setAddedToBuild } = productSlice.actions;

export default productSlice.reducer;
