import { createSlice } from '@reduxjs/toolkit'

interface Product {
  id: number
  name: string
}

interface IProductSearch {
  items: Product[]
  status: string | null
}

const initialState: IProductSearch = {
  items: [],
  status: null
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
})

export const {} = productSlice.actions

export default productSlice.reducer
