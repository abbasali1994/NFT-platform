import { configureStore } from "@reduxjs/toolkit";
import walletReducer from "./redux/walletSlice";

export default configureStore({
  reducer: {
    wallet: walletReducer,
  },
});
