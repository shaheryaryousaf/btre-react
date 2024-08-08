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
  addListingStatus: "idle",
  deleteListingStatus: "idle",
  error: null,
};

// ====================================
// Get All Listings
// ====================================
export const getAllListings = createAsyncThunk(
  "listings/getAllListings",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/all");
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

// ====================================
// Add New Listing
// ====================================
export const addNewListing = createAsyncThunk(
  "addNewListing",
  async (data, { rejectWithValue }) => {
    try {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      const token = userInfo?.token;

      if (!token) {
        return rejectWithValue("No authentication token found");
      }

      const response = await api.post(LISTINGS_URL + "/add", data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data.message);
    }
  }
);

// ====================================
// Delete Listing
// ====================================
export const deleteListing = createAsyncThunk("deleteListing", async (id) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const token = userInfo?.token;

  if (!token) {
    return rejectWithValue("No authentication token found");
  }

  await api.delete(LISTINGS_URL + `/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
});

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
      })
      /*
       * Add New Listing
       */
      .addCase(addNewListing.pending, (state) => {
        state.addListingStatus = "loading";
      })
      .addCase(addNewListing.fulfilled, (state, action) => {
        state.addListingStatus = "succeeded";
        state.listings.push(action.payload);
      })
      .addCase(addNewListing.rejected, (state, action) => {
        state.addListingStatus = "failed";
        state.error = action.payload;
      })
      /*
       * Delete Listing
       */
      .addCase(deleteListing.pending, (state) => {
        state.deleteListingStatus = "loading";
      })
      .addCase(deleteListing.fulfilled, (state, { meta: { arg } }) => {
        state.deleteListingStatus = "succeeded";
        state.listings = state.listings.filter(
          (listing) => listing._id !== arg
        );
      })
      .addCase(deleteListing.rejected, (state, action) => {
        state.deleteListingStatus = "failed";
        state.error = action.error.message;
      });
  },
});

// Selector for all listings
export const allListings = (state) => state.listings.listings;
export const listingsStatus = (state) => state.listings.allStatus;
export const singleListing = (state) => state.listings.listing;
export const singleStatus = (state) => state.listings.singleStatus;
export const addListingStatus = (state) => state.listings.addListingStatus;
export const deleteListingStatus = (state) =>
  state.listings.deleteListingStatus;

// Export the reducer as the default export
export default listingsSlice.reducer;
