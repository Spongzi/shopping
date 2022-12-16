import { configureStore } from "@reduxjs/toolkit";
import age from "./reducer/age";

const store = configureStore({
  reducer: {
    age: age,
  },
});

export default store;
