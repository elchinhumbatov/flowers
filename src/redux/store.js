import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './basketSlice'
import favoriteReducer from './favoriteSlice'
import productsReducer from './productsSlice'
import productReducer from './productSlice'
import mainReducer from './mainSlice'
import navigationReducer from './navigationSlice'
import roadmapReducer from './roadmap'
import deliveryReducer from './deliverySlice'
import instructionsReducer from './instructionsSlice'

export default configureStore({
  reducer: {
    basketPage: basketReducer,
    favoritePage: favoriteReducer,
    productsPage: productsReducer,
    productPage: productReducer,
    mainPage: mainReducer,
    navigations: navigationReducer,
    roadmap: roadmapReducer,
    deliveryPage: deliveryReducer,
    instructionsPage: instructionsReducer,
  },
})