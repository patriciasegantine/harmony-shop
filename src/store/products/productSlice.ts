import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";

export interface IProduct {
  id: number
  name: string
  bestSeller: boolean
  section: 'Face' | 'Body' | null
  price: number
  img: string
  quantity: number
  description: string | null
  productInformation: string
  review: []
}

export interface IProducts {
  items: IProduct[]
  status: 'idle' | 'pending' | 'success' | 'rejected' | null
  error: undefined | null | string
}

const initialState: IProducts = {
  items: [],
  status: null,
  error: null
}

export const productsFetch = createAsyncThunk<IProduct[], void, {}>(
  'products/productsFetch',
  async () => {
    const response = await axios.get<IProduct[]>(`http://localhost:5000/products`)
    return response?.data
  }
)

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(productsFetch.pending, (state) => {
        state.status = 'pending'
      })
      .addCase(productsFetch.fulfilled, (state, action) => {
        state.status = 'success'
        state.items = action.payload
      })
      .addCase(productsFetch.rejected, (state, action) => {
        state.status = 'rejected'
        state.error = action.error.message
      })
  }
})

export const {} = productSlice.actions

// export default productSlice.reducer

export const selectProducts = (state: { products: IProducts }) => state.products;
