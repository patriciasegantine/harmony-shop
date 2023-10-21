import productReducer from "./products/productSlice.ts";
import courseReducer from "./courses/courseSlice.ts";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  products: productReducer,
  courses: courseReducer
})

export type RootState = ReturnType<typeof rootReducer>
