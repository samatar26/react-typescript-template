import { configureStore } from '@reduxjs/toolkit'

import { counterSlice } from './counter'

const createStore = () =>
  configureStore({
    reducer: { counter: counterSlice.reducer },
  })

const store = createStore()

type RootState = ReturnType<typeof store.getState>

export { createStore, RootState, store }
