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
  message: string
}

const initialState: ModalsState = {
  modalStack: [] as ModalName[],
  modalForAnimation: null,
  message: '',
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
    addAnimation: (state, action) => {
      state.modalForAnimation = action.payload;
    },
    addMessageFromModal: (state, { payload }) => {
      state.message = payload;
    }
  }
})

export const { openModal, closeModal, addMessageFromModal, addAnimation } = modalsSlice.actions

export const modalStack = createSelector(
  (state: RootState) => state.modals,
  (modals) => modals.modalStack
)

export const modalForAnimation = createSelector(
  (state: RootState) => state.modals,
  (modals) => modals.modalForAnimation
)

export const messageFromModal = createSelector(
  (state: RootState) => state.modals,
  (modals) => modals.message
)

export default modalsSlice.reducer
