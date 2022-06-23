import { ReactNode } from "react";

export interface IBtn {
  className?: string
  type?: 'button' | 'submit'
  text?: string
  isIcon?: boolean
  children?: ReactNode
}
