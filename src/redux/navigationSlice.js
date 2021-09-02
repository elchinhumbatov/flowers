import { createSlice } from '@reduxjs/toolkit'

export const navigationSlice = createSlice({
  name: 'navigations',
  initialState: {
    categories: [ "Букеты", "Цветы", "Подарки", "Кому", "Композиции" ],
    subCategories: [
      {
        title: '',
        uls: [
          {
            lh: 'Тип букета', 
            lis: [ 
              { li: 'Авторские', url: '/products' },
              { li: 'Большие', url: '/' },
              { li: 'Букет невесты', url: '/' },
            ]
          }, 
          {
            lh: 'Состав', 
            lis: [ 
              { li: 'Розы', url: '/' },
              { li: 'Пионы', url: '/' },
              { li: 'Тюльпаны', url: '/' },
            ]
          }, 
          {
            lh: 'Повод', 
            lis: [ 
              { li: 'День рождения', url: '/' },
              { li: 'Годовщина', url: '/' },
              { li: 'Выпускной', url: '/' },
            ]
          }, 
          {
            lh: 'Кому', 
            lis: [ 
              { li: 'Маме', url: '/' },
              { li: 'Любимой', url: '/' },
              { li: 'Коллеге', url: '/' },
            ]
          }, 
          {
            lh: 'Предложения', 
            lis: [ 
              { li: 'Акции', url: '/' },
              { li: '25 роз', url: '/' },
              { li: '51 роза', url: '/' },
            ]
          }, 
        ]
      },
      {
        title: 'Все цветы по штучно',
        uls: [
          {
            lh: '', 
            lis: [ 
              { li: 'Розы', url: '/' },
              { li: 'Пионы', url: '/' },
              { li: 'Тюльпаны', url: '/' },
            ]
          }, 
          {
            lh: '', 
            lis: [ 
              { li: 'Герберы', url: '/' },
              { li: 'Сирень', url: '/' },
              { li: 'Лиллии', url: '/' },
            ]
          }, 
        ]
      },
      {
        title: '',
        uls: [
          {
            lh: '', 
            lis: [ 
              { li: 'До 25 роз', url: '/' },
              { li: '51 роза', url: '/' },
              { li: '101 роза', url: '/' },
            ]
          },
          {
            lh: '', 
            lis: [ 
              { li: 'Сиреневые', url: '/' },
              { li: 'Голубые', url: '/' },
              { li: 'Деккоративные', url: '/' },
            ]
          },
        ]
      },
      {
        title: '',
        uls: [
          {
            lh: '', 
            lis: [ 
              { li: 'Белые', url: '/' },
              { li: 'Розовые', url: '/' },
              { li: 'Малиновые', url: '/' },
            ]
          },
        ]
      },
      {
        title: '',
        uls: [
          {
            lh: '', 
            lis: [ 
              { li: 'Букеты цветов', url: '/' },
              { li: 'Цветы в коробке', url: '/' },
              { li: 'Цветы в корзине', url: '/' },
            ]
          },
        ]
      },
    ],
  },
  reducers: {},
})

export default navigationSlice.reducer
