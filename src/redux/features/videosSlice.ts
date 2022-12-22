import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: VideoData = {
  videos: [],
};

export const fetchVideos = createAsyncThunk("videos/fetchVideos", async () => {
  const response = await new Promise<Video[]>((resolve) => {
    setTimeout(() => {
      resolve([{ id: 1 }, { id: 2 }]);
    }, 2000);
  });
  return response;
});

const videoSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    addVideos: (state, action: PayloadAction<Video[]>) => {
      state.videos = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchVideos.fulfilled, (state, action) => {
      // Add user to the state array
      state.videos = action.payload;
    });
  },
});

export default videoSlice;
