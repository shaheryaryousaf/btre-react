import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import { useDispatch } from "react-redux";

import listingsReducer from "./api/listingApiSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    listings: listingsReducer,
  },
});

export default store;
