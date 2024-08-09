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
  singleRealtorStatus: "idle",
  addRealtorStatus: "idle",
  deleteRealtorStatus: "idle",
  updateRealtorStatus: "idle",
  error: null,
};

// ====================================
// Get a All Realtors
// ====================================
export const getAllRealtors = createAsyncThunk(
  "getAllRealtors",
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

// ====================================
// Add New Realtor
// ====================================
export const addNewRealtor = createAsyncThunk(
  "addNewRealtor",
  async (data, { rejectWithValue }) => {
    try {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      const token = userInfo?.token;

      if (!token) {
        return rejectWithValue("No authentication token found");
      }

      const response = await api.post(REALTORS_URL + "/add", data, {
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
// Delete Realtor
// ====================================
export const deleteRealtor = createAsyncThunk("deleteRealtor", async (id) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const token = userInfo?.token;

  if (!token) {
    return rejectWithValue("No authentication token found");
  }

  await api.delete(REALTORS_URL + `/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
});

// ====================================
// Update Realtor
// ====================================
export const updateRealtor = createAsyncThunk(
  "updateRealtor",
  async ({ data, id }, { rejectWithValue }) => {
    try {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      const token = userInfo?.token;

      if (!token) {
        return rejectWithValue("No authentication token found");
      }

      const response = await api.put(REALTORS_URL + `/${id}`, data, {
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
      })
      .addCase(getAllRealtors.rejected, (state, action) => {
        state.allRealtorsStatus = "failed";
        state.error = action.payload; // Directly access payload for error message
      })
      /*
       * Get Realtor Detail
       */
      .addCase(getRealtorDetail.pending, (state) => {
        state.singleRealtorStatus = "loading";
      })
      .addCase(getRealtorDetail.fulfilled, (state, action) => {
        state.singleRealtorStatus = "succeeded";
        state.realtor = action.payload;
      })
      .addCase(getRealtorDetail.rejected, (state, action) => {
        state.singleRealtorStatus = "failed";
        state.error = action.error.message;
      })
      /*
       * Add New Realtor
       */
      .addCase(addNewRealtor.pending, (state) => {
        state.addRealtorStatus = "loading";
      })
      .addCase(addNewRealtor.fulfilled, (state, action) => {
        state.addRealtorStatus = "succeeded";
        state.realtors.push(action.payload);
      })
      .addCase(addNewRealtor.rejected, (state, action) => {
        state.addRealtorStatus = "failed";
        state.error = action.payload;
      })
      /*
       * Update Realtor
       */
      .addCase(updateRealtor.pending, (state) => {
        state.updateRealtorStatus = "loading";
      })
      .addCase(updateRealtor.fulfilled, (state, action) => {
        state.updateRealtorStatus = "succeeded";
        state.realtors = state.realtors.map((realtor) =>
          realtor._id === action.payload._id ? action.payload : realtor
        );
      })
      .addCase(updateRealtor.rejected, (state, action) => {
        state.updateRealtorStatus = "failed";
        state.error = action.payload;
      })
      /*
       * Delete Realtor
       */
      .addCase(deleteRealtor.pending, (state) => {
        state.deleteRealtorStatus = "loading";
      })
      .addCase(deleteRealtor.fulfilled, (state, { meta: { arg } }) => {
        state.deleteRealtorStatus = "succeeded";
        state.realtors = state.realtors.filter(
          (realtor) => realtor._id !== arg
        );
      })
      .addCase(deleteRealtor.rejected, (state, action) => {
        state.deleteRealtorStatus = "failed";
        state.error = action.error.message;
      });
  },
});

// Selector for all realtors
export const allRealtors = (state) => state.realtors.realtors;
export const realtorsStatus = (state) => state.realtors.allRealtorsStatus;
export const singleRealtor = (state) => state.realtors.realtor;
export const addRealtorStatus = (state) => state.realtors.addRealtorStatus;
export const singleRealtorStatus = (state) =>
  state.realtors.singleRealtorStatus;
export const deleteRealtorStatus = (state) =>
  state.realtors.deleteRealtorStatus;
export const updateRealtorStatus = (state) =>
  state.realtors.updateRealtorStatus;

// Export the reducer as the default export
export default realtorsSlice.reducer;
