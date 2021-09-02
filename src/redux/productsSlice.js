import { createSlice } from '@reduxjs/toolkit'

export const productsSlice = createSlice({
  name: 'productsPage',
  initialState: {
    products: [
      { title: "Комплимент", price: "3540 руб.", img: "p0" },
      { title: "“Леди и Бродяга”", price: "3540 руб.", img: "p1" },
      { title: "Пионовое дерево", price: "3540 руб.", img: "p2" },
      { title: "Цветочный сад", price: "3540 руб.", img: "p3" },
      { title: "Цветочный сад", price: "3540 руб.", img: "p4" },
      { title: "Пионовое дерево", price: "3540 руб.", img: "p2" },
      { title: "“Леди и Бродяга”", price: "3540 руб.", img: "p1" },
      { title: "Пионовое дерево", price: "3540 руб.", img: "p2" },
      { title: "Цветочный сад", price: "3540 руб.", img: "p3" },
      { title: "Цветочный сад", price: "3540 руб.", img: "p4" },
      { title: "Пионовое дерево", price: "3540 руб.", img: "p2" },
    ],
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
  },
})

export const { increment, decrement } = productsSlice.actions

export default productsSlice.reducer
