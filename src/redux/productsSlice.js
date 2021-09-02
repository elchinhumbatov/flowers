import { createSlice } from '@reduxjs/toolkit'

export const productsSlice = createSlice({
  name: 'productsPage',
  initialState: {
    products: [
      {id: 0, title: '"Комплимент"', price: "3540 руб.", img: "p0" },
      {id: 1, title: "“Леди и Бродяга”", price: "3540 руб.", img: "p1" },
      {id: 2, title: '"Пионовое дерево"', price: "3540 руб.", img: "p2" },
      {id: 3, title: '"Цветочный сад"', price: "3540 руб.", img: "p3" },
      {id: 4, title: '"Цветочный сад"', price: "3540 руб.", img: "p4" },
      {id: 5, title: '"Пионовое дерево"', price: "3540 руб.", img: "p2" },
      {id: 6, title: "“Леди и Бродяга”", price: "3540 руб.", img: "p1" },
      {id: 7, title: '"Пионовое дерево"', price: "3540 руб.", img: "p2" },
      {id: 8, title: '"Цветочный сад"', price: "3540 руб.", img: "p3" },
      {id: 9, title: '"Цветочный сад"', price: "3540 руб.", img: "p4" },
      {id: 10, title: '"Пионовое дерево"', price: "3540 руб.", img: "p2" },
    ],
    recomendations: [
      {id: 0, title: 'Мишка Teddy', text: 'порадует ваших близких', price: "2540 руб.", img: "p0" },
      {id: 1, title: 'Мишка Teddy', text: 'порадует ваших близких', price: "2540 руб.", img: "p1" },
      {id: 2, title: 'Мишка Teddy', text: 'порадует ваших близких', price: "2540 руб.", img: "p2" },
      {id: 3, title: 'Мишка Teddy', text: 'порадует ваших близких', price: "2540 руб.", img: "p3" },
      {id: 4, title: 'Мишка Teddy', text: 'порадует ваших близких', price: "2540 руб.", img: "p4" },
      {id: 5, title: 'Мишка Teddy', text: 'порадует ваших близких', price: "2540 руб.", img: "p3" },
      {id: 6, title: 'Мишка Teddy', text: 'порадует ваших близких', price: "2540 руб.", img: "p1" },
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
