import { createSelector, createSlice } from '@reduxjs/toolkit'
import { RootState } from '..'
import { ICharacter } from "./character";

interface ICharactersState {
  stack: ICharacter[]
}

export const initialState: ICharactersState = {
  stack: [] as ICharacter[]
}

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    exportCharacter: (state, { payload }) => {
      state.stack.push(payload);
    },
    deleteCharacter: (state, { payload }) => {
      state.stack = state.stack
        .filter((character) => character.name !== payload.name);
    },
  }
})

export const { exportCharacter } = charactersSlice.actions

export const currentStack = createSelector(
  (state: RootState) => state.characters,
  (characters) => characters.stack
)

export default charactersSlice.reducer
