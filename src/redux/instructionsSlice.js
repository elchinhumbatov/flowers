import { createSlice } from '@reduxjs/toolkit'

export const instructionsSlice = createSlice({
  name: 'instructions',
  initialState: {
    instructions: [
      {num: '1.', text: 'Вы можете выбрать наиболее соответствующий букет ли обратиться за помощью к нашим консультантам по телефону или на почту'},
      {num: '2.', text: 'Добавьте нужные цветы в корзину и оформите заказ. Укажите свои контактные данные в оформлении заказа — они нужны, чтобы информировать вас о статусе заказа и отправить чек оплаты'},
      {num: '3.', text: 'Если вы дарите кому-то, то укажите известные вам данные получателя. Если вы не знаете адреса и удобного времени доставки, оставьте эти поля пустыми и мы сами уточним их у получателя в день доставки'},
      {num: '4.', text: 'В корзине также есть возможность выбрать шоколад и другие дополнительные подарки'},
    ],
  },
  reducers: {},
})

// export const { increment, decrement, incrementByAmount } = instructionsSlice.actions

export default instructionsSlice.reducer
