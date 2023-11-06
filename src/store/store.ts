import { configureStore } from "@reduxjs/toolkit";
import { productsFetch, productSlice } from "./products/productSlice.ts";

export const store = configureStore({
  reducer: {
    products: productSlice.reducer,
  }
})

store.dispatch(productsFetch())

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
