import { configureStore } from "@reduxjs/toolkit";
import studentsReducer from "./apiSlice";

const store = configureStore({
  reducer: {
    students: studentsReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
