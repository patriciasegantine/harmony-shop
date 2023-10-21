import { createSlice } from '@reduxjs/toolkit'

export interface CourseState {
  items: []
  status: 'active' | 'inactive' | null
}

const initialState: CourseState = {
  items: [],
  status: null
}

export const courseSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {},
})

export const {} = courseSlice.actions

export default courseSlice.reducer
