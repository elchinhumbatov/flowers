import { createSlice } from '@reduxjs/toolkit'

export const mainSlice = createSlice({
  name: 'mainPage',
  initialState: {
    mainCards: [
      { id: 'card0', title: 'Для любимой мамы ->', price: '5540 руб.', img: 'card0', action: 'Заказать' },
      { id: 'card1', title: 'Удиви свою половинку ->', price: '4540 руб.', img: 'card1', action: 'Заказать' },
      { id: 'card2', title: 'Букет дня', price: '3540 руб.', img: 'card2', action: 'Заказать' },
    ],
    interestCards: [
      { id: 'card0', title: 'День рождения!', text: 'Прекрасный повод сделать приятное', price: '2500 руб.', img: 'card3', action: 'Подарить' },
      { id: 'card1', title: 'Комбо набор №1', price: '2500 руб.', img: 'card4', action: 'Заказать' },
      { id: 'card2', title: 'Подарки', price: '2500 руб.', img: 'card5', action: 'Посмотреть' },
    ],
    testimonials: [
      {text: '“ Большое спасибо, прекрасный букет. Доставили во время. Хорошая обраная связь. Приятные цены. “', author: 'Александр Петрович', img: 'p5'},
      {text: '“ Большое спасибо, прекрасный букет. Доставили во время. Хорошая обраная связь. Приятные цены. “', author: 'Александр Петрович', img: 'p5'},
      {text: '“ Большое спасибо, прекрасный букет. Доставили во время. Хорошая обраная связь. Приятные цены. “', author: 'Александр Петрович', img: 'p5'},
      {text: '“ Большое спасибо, прекрасный букет. Доставили во время. Хорошая обраная связь. Приятные цены. “', author: 'Александр Петрович', img: 'p5'},
      {text: '“ Большое спасибо, прекрасный букет. Доставили во время. Хорошая обраная связь. Приятные цены. “', author: 'Александр Петрович', img: 'p5'},
      {text: '“ Большое спасибо, прекрасный букет. Доставили во время. Хорошая обраная связь. Приятные цены. “', author: 'Александр Петрович', img: 'p5'},
    ]
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = mainSlice.actions

export default mainSlice.reducer
