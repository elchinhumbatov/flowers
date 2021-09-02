import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './basketSlice'
import productsReducer from './productsSlice'
import mainReducer from './mainSlice'
import navigationReducer from './navigationSlice'
import shopsReducer from './shopsSlice'
import roadmapReducer from './roadmap'
import deliveryReducer from './deliverySlice'

export default configureStore({
    reducer: {
        counter: basketReducer,
        productsPage: productsReducer,
        mainPage: mainReducer,
        navigations: navigationReducer,
        shopsPage: shopsReducer,
        roadmap: roadmapReducer,
        deliveryPage: deliveryReducer,
    },
})