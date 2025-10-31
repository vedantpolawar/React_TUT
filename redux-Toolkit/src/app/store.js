import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
//you’re actually importing todoSlice.reducer — the reducer function created automatically by createSlice().
export const store = configureStore({
  reducer: todoReducer,
});
