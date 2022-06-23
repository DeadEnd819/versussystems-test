import { createSelector, createSlice } from '@reduxjs/toolkit'
import { RootState } from '..'

export enum ModalName {
  IMPORT = 'IMPORT',
  CHARACTER_FORM = 'CHARACTER_FORM',
  MESSAGE = 'MESSAGE'
}

export interface ModalsState {
  modalStack: ModalName[]
  modalForAnimation: ModalName | null
}

const initialState: ModalsState = {
  modalStack: [] as ModalName[],
  modalForAnimation: null
}

export const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.modalStack.push(action.payload);
    },
    closeModal: (state, action) => {
      state.modalStack = state.modalStack.filter((modal) => modal !== action.payload);
      state.modalForAnimation = null;
    },
    closeAll: (state) => {
      state.modalStack = [];
    },
    addAnimation: (state, action) => {
      state.modalForAnimation = action.payload;
    },
  }
})

export const { openModal, closeModal, closeAll, addAnimation } = modalsSlice.actions

export const modalStack = createSelector(
  (state: RootState) => state.modals,
  (modals) => modals.modalStack
)

export const modalForAnimation = createSelector(
  (state: RootState) => state.modals,
  (modals) => modals.modalForAnimation
)

export default modalsSlice.reducer
