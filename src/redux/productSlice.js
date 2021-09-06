import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'productPage',
  initialState: {
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
  reducers: {},
})

// export const { increment, decrement } = productSlice.actions

export default productSlice.reducer
