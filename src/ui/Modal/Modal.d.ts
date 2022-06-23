import { ReactElement } from 'react'

export interface IModalWrapper {
  className?: string
  children: ReactElement | string
  isClose: boolean
  onClose: (evt?: any) => void
  isLast: boolean
  onlyOne: boolean
}
