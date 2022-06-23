import { FunctionComponent, JSXElementConstructor, ReactElement, SVGProps } from "react";

export type Content = string | ReactElement<any, string | JSXElementConstructor<any>>;
export type Components<T, C> = {[key in T]: C};

export interface IField {
  name: string
  type: 'number' | 'text'
  label: string
  placeholder: string
}

export interface IOption {
  text: string
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>
}

export interface IOptions {
  [index: string]: IOption
}
