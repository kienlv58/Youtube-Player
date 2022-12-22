import { combineReducers } from "@reduxjs/toolkit";

import videoSlice from "./features/videosSlice";

const rootReducer = combineReducers({
  [videoSlice.name]: videoSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
