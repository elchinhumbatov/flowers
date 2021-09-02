import { createSlice } from '@reduxjs/toolkit'

export const shopsSlice = createSlice({
    name: 'counter',
    initialState: {

        shops: ['г. Москва, Можайское шоссе', 'г. Москва, м. Фили, Новозаводская улица, д. 2, к.1.', 'г. Москва, м. Фили, Новозаводская улица, д.2, к .1. '],

        branches: [{
                adress: 'г. Москва, Можайское шоссе',
                phone: '+7(999)999-03-97',
                mail: 'placeflower@yandex.ru'
            },
            {
                adress: 'г. Москва, Можайское шоссе',
                phone: '+7(999)999-03-98',
                mail: 'placeflower@yandex.ru'
            },
            {
                adress: 'г. Москва, Можайское шоссе',
                phone: '+7(999)999-03-99',
                mail: 'placeflower@yandex.ru'
            }
        ]
    },
    reducers: {

    },
})

// export const { increment, decrement, incrementByAmount } = shopsSlice.actions

export default shopsSlice.reducer