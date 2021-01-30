import { configureStore } from '@reduxjs/toolkit'
import { counterSlice, increment, decrement } from './counter'

type StoreInitialState = {
  [counterSlice.name]?: number
}

const createStore = (initialState?: StoreInitialState) =>
  configureStore({
    reducer: { counter: counterSlice.reducer },
    preloadedState: initialState,
  })

const store = createStore()

type RootState = ReturnType<typeof store.getState>

export {
  createStore,
  StoreInitialState,
  RootState,
  store,
  increment,
  decrement,
}
