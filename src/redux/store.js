import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/api";
import productReducer from "./features/pcBuild/pcBuildSlice"

export default configureStore({
  reducer: {
    product: productReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
