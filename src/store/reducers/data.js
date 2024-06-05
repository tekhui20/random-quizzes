import { createSlice } from "@reduxjs/toolkit";

const mdata = require("./mockData.json");

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: mdata,
    leaderBoard: [
      {
        name: "Cheater",
        score: 21,
      },
    ],
    scoreCount: 0,
  },
  reducers: {
    actionScoreChange: (state, action) => {
      state.scoreCount = action.payload;
    },
    actionSetLeaderBoard: (state, action) => {
      state.leaderBoard = [...state.leaderBoard, ...action.payload];
    },
  },
});

export const { actionScoreChange, actionSetLeaderBoard } = dataSlice.actions;
export const selectData = (state) => state.data.data;
export const selectLeaderBoard = (state) => state.data.leaderBoard;
export const selectScore = (state) => state.data.scoreCount;

export default dataSlice.reducer;
