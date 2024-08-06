import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";

import authReducer from "./api/authSlice";
import listingsReducer from "./api/listingApiSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    listings: listingsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
