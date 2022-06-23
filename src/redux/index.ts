import { configureStore } from '@reduxjs/toolkit'

import modalsReducer from './slices/modals'
import characterReducer from './slices/character'
import charactersReducer from './slices/characters'

export const store = configureStore({
  reducer: {
    modals: modalsReducer,
    character: characterReducer,
    characters: charactersReducer,
  },
  devTools: true
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
