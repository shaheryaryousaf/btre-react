import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";

import authReducer from "./api/authSlice";
import listingsReducer from "./api/listingApiSlice";
import realtorsReducer from './api/realtorApiSlice'

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    listings: listingsReducer,
    realtors: realtorsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
