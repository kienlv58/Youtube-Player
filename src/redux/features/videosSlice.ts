import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RecommendationInfo } from "src/gRPC/rooms/models_pb";
import { ListRecommendationsResponse } from "src/gRPC/rooms/services.public_pb";
import { getRecommendations } from "src/services";

interface VideoInfo extends RecommendationInfo.AsObject {
  isPlayed?: boolean;
}

type VideosSliceType = Omit<
  ListRecommendationsResponse.AsObject,
  "recommendationsList"
> & {
  recommendationsList: VideoInfo[];
};

const initialState: VideosSliceType = {
  recommendationsList: [],
  total: 0,
  error: undefined,
};

export const addVideos = createAsyncThunk("videos/addVideos", async () => {
  return getRecommendations();
});

const videoSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    addVideo(state, action: PayloadAction<VideoInfo>) {
      state.recommendationsList.push(action.payload);
      state.total = state.total + 1;
    },
    removeVideo(state, action: PayloadAction<string>) {
      state.recommendationsList = state.recommendationsList.filter(
        (item) => item.id !== action.payload,
      );
      state.total = state.recommendationsList.length;
    },
    editVideoTitle: (
      state,
      action: PayloadAction<{ id: string; title: string }>,
    ) => {
      const { id, title } = action.payload;
      const videoUpdate = state.recommendationsList.find(
        (item) => item.id === id,
      );
      if (videoUpdate && videoUpdate.metadata) {
        videoUpdate.metadata.title = title;
      }
    },
    clearAllVideo(state, action: PayloadAction) {
      state.recommendationsList = [];
      state.total = 0;
    },
    markPlayed: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const videoUpdate = state.recommendationsList.find(
        (item) => item.id === id,
      );
      if (videoUpdate) {
        videoUpdate.isPlayed = true;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addVideos.fulfilled, (state, action) => {
      const { recommendationsList, total, error } = action.payload;
      state.recommendationsList = recommendationsList;
      state.total = total;
      state.error = error;
    });
  },
});

export default videoSlice;
