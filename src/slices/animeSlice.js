import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../utils/api";

export const fetchAnimeByQuery = createAsyncThunk(
  "anime/fetchAnimeByQuery",
  async (q) => {
    const { data } = await api(`/anime`, {
      params: {
        q,
      },
    });
    return data.data;
  }
);

const initialState = {
  data: [1, 2, 3],
  status: "idle",
  error: null,
};

const animeSlice = createSlice({
  name: "anime",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchAnimeByQuery.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAnimeByQuery.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error;
      })
      .addCase(fetchAnimeByQuery.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      }),
});

export default animeSlice.reducer;
