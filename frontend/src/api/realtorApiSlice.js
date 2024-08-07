import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"; // Import Axios for API calls
import { REALTORS_URL } from "../constants";

// Create an Axios instance for API requests
const api = axios.create({
  baseURL: REALTORS_URL,
  headers: {
    // You can add default headers here, like authorization tokens if needed
    "Content-Type": "application/json",
  },
});

// Initial state for the realtors slice
const initialState = {
  realtors: [],
  realtor: {},
  allRealtorsStatus: "idle",
  singleStatus: "idle",
  error: null,
  totalRealtorsCount: 0,
  totalRealtorPage: 0,
};

// ====================================
// Get a All Realtors
// ====================================
export const getAllRealtors = createAsyncThunk(
  "getAllRealtors",
  async ({ page }, { rejectWithValue }) => {
    try {
      const url = `/all?page=${page}`; // Use baseURL from the api instance
      const response = await api.get(url);

      console.log(response);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// ====================================
// Get a Single Realtor
// ====================================
export const getRealtorDetail = createAsyncThunk(
  "getRealtorDetail",
  async (id) => {
    const url = REALTORS_URL + `/${id}`;
    const response = await api.get(url);
    return response.data;
  }
);

// Create a slice for realtors
const realtorsSlice = createSlice({
  name: "realtors",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      /*
       * Get All realtors
       */
      .addCase(getAllRealtors.pending, (state) => {
        state.allRealtorsStatus = "loading";
      })
      .addCase(getAllRealtors.fulfilled, (state, action) => {
        state.allRealtorsStatus = "succeeded";
        state.realtors = action.payload.realtors;
        state.totalRealtorsCount = action.payload.totalRealtorsCount;
        state.totalRealtorPage = action.payload.totalRealtorPage;
      })
      .addCase(getAllRealtors.rejected, (state, action) => {
        state.allRealtorsStatus = "failed";
        state.error = action.payload; // Directly access payload for error message
      })
      /*
       * Get Realtor Detail
       */
      .addCase(getRealtorDetail.pending, (state) => {
        state.singleStatus = "loading";
      })
      .addCase(getRealtorDetail.fulfilled, (state, action) => {
        state.singleStatus = "succeeded";
        state.realtor = action.payload;
      })
      .addCase(getRealtorDetail.rejected, (state, action) => {
        state.singleStatus = "failed";
        state.error = action.error.message;
      });
  },
});

// Selector for all realtors
export const allRealtors = (state) => state.realtors.realtors;
export const realtorsStatus = (state) => state.realtors.allRealtorsStatus;
export const singleRealtor = (state) => state.realtors.realtor;
export const singleRealtorStatus = (state) => state.realtors.singleStatus;

// Export the reducer as the default export
export default realtorsSlice.reducer;
