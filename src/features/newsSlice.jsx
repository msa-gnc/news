import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getData = createAsyncThunk("newsSlice/getData", async () => {
  const res = await axios(
    "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=81a4163ea7eb4bccb489151972100adb"
  );
//   console.log(res);
  return res.data.articles;
});

export const newsSlice = createSlice({
  name: "newsSlice",
  initialState: {
    news: [],
    loading: true,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getData.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.news = payload;
      });
  },
});

export default newsSlice.reducer;
