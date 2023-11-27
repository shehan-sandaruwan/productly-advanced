import { configureStore } from "@reduxjs/toolkit";
import authSlicer from "./authSlicer";

const store = configureStore({
  reducer: {
    authentication: authSlicer,
  },
});
export default store;
