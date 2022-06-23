import { ReactNode } from "react";

export interface IBtn {
  className?: string
  type?: 'button' | 'submit'
  text?: string
  isTransparent?: boolean
  isIcon?: boolean
  children?: ReactNode
  onClick?: (evt: any) => void
}
