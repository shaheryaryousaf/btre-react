import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"; // Import Axios for API calls
import { LISTINGS_URL } from "../constants";

// Create an Axios instance for API requests
const api = axios.create({
  baseURL: LISTINGS_URL,
  headers: {
    // You can add default headers here, like authorization tokens if needed
    "Content-Type": "application/json",
  },
});

// Initial state for the listings slice
const initialState = {
  listings: [],
  listing: {},
  allStatus: "idle",
  singleStatus: "idle",
  error: null,
  totalListingsCount: 0,
  totalListingPage: 0,
};

// ====================================
// Get All Listings
// ====================================
export const getAllListings = createAsyncThunk(
  "getAllListings",
  async ({ page }, { rejectWithValue }) => {
    try {
      const url = `/all?page=${page}`; // Use baseURL from the api instance
      const response = await api.get(url);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// ====================================
// Get a Single Listing
// ====================================
export const getListingDetail = createAsyncThunk(
  "getListingDetail",
  async (id) => {
    const url = LISTINGS_URL + `/${id}`;
    const response = await api.get(url);
    return response.data;
  }
);

// Create a slice for listings
const listingsSlice = createSlice({
  name: "listings",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      /*
       * Get All Listings
       */
      .addCase(getAllListings.pending, (state) => {
        state.allStatus = "loading";
      })
      .addCase(getAllListings.fulfilled, (state, action) => {
        state.allStatus = "succeeded";
        state.listings = action.payload.listings;
        state.totalListingsCount = action.payload.totalListingsCount;
        state.totalListingPage = action.payload.totalListingPage;
      })
      .addCase(getAllListings.rejected, (state, action) => {
        state.allStatus = "failed";
        state.error = action.payload; // Directly access payload for error message
      })
      /*
       * Get Listing Detail
       */
      .addCase(getListingDetail.pending, (state) => {
        state.singleStatus = "loading";
      })
      .addCase(getListingDetail.fulfilled, (state, action) => {
        state.singleStatus = "succeeded";
        state.listing = action.payload;
      })
      .addCase(getListingDetail.rejected, (state, action) => {
        state.singleStatus = "failed";
        state.error = action.error.message;
      });
  },
});

// Selector for all listings
export const allListings = (state) => state.listings.listings;
export const listingsStatus = (state) => state.listings.allStatus;
export const singleListing = (state) => state.listings.listing;
export const singleStatus = (state) => state.listings.singleStatus;

// Export the reducer as the default export
export default listingsSlice.reducer;
