import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducerSlice/counterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
