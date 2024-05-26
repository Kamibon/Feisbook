'use client'
import { configureStore } from '@reduxjs/toolkit'
import socialReducer from './stateSlice'

export  const store = configureStore({
  reducer: {
    social: socialReducer,
  },
})

 export type AppDispatch = typeof store.dispatch