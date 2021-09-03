import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './basketSlice'
import productsReducer from './productsSlice'
import mainReducer from './mainSlice'
import navigationReducer from './navigationSlice'
import roadmapReducer from './roadmap'
import deliveryReducer from './deliverySlice'
import instructionsReducer from './instructionsSlice'

export default configureStore({
  reducer: {
    counter: basketReducer,
    productsPage: productsReducer,
    mainPage: mainReducer,
    navigations: navigationReducer,
    roadmap: roadmapReducer,
    deliveryPage: deliveryReducer,
    instructionsPage: instructionsReducer,
  },
})