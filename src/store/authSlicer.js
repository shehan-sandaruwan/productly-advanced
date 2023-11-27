import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

export const authSlicer = createSlice({
  name: "auth",
  initialState: {
    user: "",
  },
  reducers: {
    setUser: (state, action) => {
      const decodedUser = jwtDecode(action.payload);
      state.user = decodedUser;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser } = authSlicer.actions;

export default authSlicer.reducer;
