import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { movieApi } from "../utils/api";

export const fetchMovieByQuery = createAsyncThunk(
  "movie/fetchMovieByQuery",
  async (query) => {
    const { data } = await movieApi(`/search/movie`, {
      params: {
        api_key: "42d3f8d886180928e42d0cabfb523b63",
        query,
        include_adult: false,
        language: "en",
        page: 1,
      },
    });
    return data.results;
  }
);

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchMovieByQuery.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMovieByQuery.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error;
      })
      .addCase(fetchMovieByQuery.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      }),
});

export default movieSlice.reducer;
