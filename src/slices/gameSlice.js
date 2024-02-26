import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { gameApi } from "../utils/api";

export const fetchGame = createAsyncThunk("game/fetchGame", async (query) => {
  const { data } = await gameApi(`/api/games`, {
    params: {
      search: query,
      page: 1,
      key: "47fbf08610484225a6b29c7c76dec737",
    },
  });
  return data.results;
});

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchGame.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchGame.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error;
      })
      .addCase(fetchGame.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      }),
});

export default gameSlice.reducer;
