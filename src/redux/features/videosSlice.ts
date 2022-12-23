import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ListRecommendationsResponse } from "src/gRPC/rooms/services.public_pb";
import { getRecommendations } from "src/services";

const initialState: ListRecommendationsResponse.AsObject = {
  recommendationsList: [],
  total: 0,
  error: undefined,
};

export const fetchVideos = createAsyncThunk("videos/fetchVideos", async () => {
  return getRecommendations();
});

const videoSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    addVideos: (
      state,
      action: PayloadAction<ListRecommendationsResponse.AsObject>,
    ) => {
      const { recommendationsList, total, error } = action.payload;
      state.recommendationsList = recommendationsList;
      state.total = total;
      state.error = error;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchVideos.fulfilled, (state, action) => {
      const { recommendationsList, total, error } = action.payload;
      state.recommendationsList = recommendationsList;
      state.total = total;
      state.error = error;
    });
  },
});

export default videoSlice;
