import { createSlice } from '@reduxjs/toolkit'

export const roadmap = createSlice({
  name: 'roadmap',
  initialState: {
    '/delivery': 'Доставка и оплата'
  },
  reducers: {},
})

// export const { increment, decrement, incrementByAmount } = roadmap.actions

export default roadmap.reducer
