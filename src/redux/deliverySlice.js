import { createSlice } from '@reduxjs/toolkit'

export const deliverySlice = createSlice({
  name: 'deliveryPage',
  initialState: {
    paymentMethods: [
      {id: 0, img: 'gpay', text: 'Google Pay'},
      {id: 1, img: 'applepay', text: 'Apple Pay'},
      {id: 2, img: 'onlinepay', text: 'Оплата онлайн'},
      {id: 3, img: 'cardpay', text: 'Оплата картой'},
      {id: 4, img: 'cashpay', text: 'Оплата наличными'},
    ],
  },
  reducers: {},
})

// export const { increment, decrement, incrementByAmount } = deliverySlice.actions

export default deliverySlice.reducer
