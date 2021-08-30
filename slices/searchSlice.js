import { createSlice } from '@reduxjs/toolkit'

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    clickedImage: {},
    screenMode: 'PORTRAIT',
  },
  reducers: {
    setClickedImage: (state, action) => {
      state.clickedImage = action.payload.clickedImage,
      state.screenMode = action.payload.screenMode
    },
  },
})

export const { setClickedImage } = searchSlice.actions

export default searchSlice.reducer
