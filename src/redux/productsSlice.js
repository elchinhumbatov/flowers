import { createSlice } from '@reduxjs/toolkit'

export const productsSlice = createSlice({
  name: 'productsPage',
  initialState: {
    products: [
      {id: 0, title: '"Комплимент"', price: "3540 руб.", img: "p0", isFavorite: false },
      {id: 1, title: "“Леди и Бродяга”", price: "3540 руб.", img: "p1", isFavorite: false },
      {id: 2, title: '"Пионовое дерево"', price: "3540 руб.", img: "p2", isFavorite: false },
      {id: 3, title: '"Цветочный сад"', price: "3540 руб.", img: "p3", isFavorite: false },
      {id: 4, title: '"Пионовое дерево"', price: "3540 руб.", img: "p2", isFavorite: false },
      {id: 5, title: '"Цветочный сад"', price: "3540 руб.", img: "p4", isFavorite: false },
      // {},
      {id: 6, title: '"Пионовое дерево"', price: "3540 руб.", img: "p2", isFavorite: false },
      {id: 7, title: "“Леди и Бродяга”", price: "3540 руб.", img: "p1", isFavorite: false },
      {id: 8, title: '"Цветочный сад"', price: "3540 руб.", img: "p3", isFavorite: false },
      {id: 9, title: '"Цветочный сад"', price: "3540 руб.", img: "p4", isFavorite: false },
      {id: 10, title: '"Пионовое дерево"', price: "3540 руб.", img: "p2", isFavorite: false },
      {id: 11, title: '"Пионовое дерево"', price: "3540 руб.", img: "p2", isFavorite: false },
    ]
  },
  reducers: {
    toggleIsFavorite: (state, action) => {
      let idx = state.products.findIndex(item => item.id === action.payload);
      state.products[idx].isFavorite = !state.products[idx].isFavorite;
    }
  },
})

export const { toggleIsFavorite } = productsSlice.actions

export default productsSlice.reducer
