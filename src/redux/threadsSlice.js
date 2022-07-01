import { createSlice } from "@reduxjs/toolkit";
import dataThreads from "../utils/threads.json";

export const threadsSlice = createSlice({
  name: "threads",
  initialState: {
    threads: dataThreads,
  },
  reducers: {
    setThreads: (state, action) => {
      state.threads.push(action.payload);
    },
  },
});

export const { setThreads } = threadsSlice.actions;
export default threadsSlice.reducer;
