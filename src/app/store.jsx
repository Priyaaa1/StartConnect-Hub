import { configureStore } from '@reduxjs/toolkit'
import themeReducer from '../features/theme'

export default configureStore({
  reducer: {
    theme:themeReducer,
  },
})