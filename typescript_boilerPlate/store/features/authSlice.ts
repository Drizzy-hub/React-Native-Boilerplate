import { createSlice } from "@reduxjs/toolkit";
import { authEndpoints } from "../../services/auth";

interface State {}
const initialState: State = {};

const authSlice = createSlice({
  extraReducers: (builder) => {
    builder.addMatcher(
      authEndpoints.getLocation.matchFulfilled,
      (state, payload) => {
        console.log(state, "state");
        console.log(payload.payload, "payload");
      }
    );
  },
  initialState,
  name: "auth",
  reducers: {},
});

export const {} = authSlice.actions;

export default authSlice.reducer;
