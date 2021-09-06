import { createSlice } from '@reduxjs/toolkit'

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    favorites: [],
    count: 0
  },
  reducers: {
    add: (state, action) => {
      state.favorites.push(action.payload);
      state.count++;
    },
    remove: (state, action) => {
      let idx = state.favorites.findIndex(item => item.id === action.payload);
      state.favorites.splice(idx, 1);
      state.count--;
    },
  },
})

export const { add, remove } = favoriteSlice.actions

export default favoriteSlice.reducer
