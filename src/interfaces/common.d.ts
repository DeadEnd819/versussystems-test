import { JSXElementConstructor, ReactElement } from 'react';

export type Content = string | ReactElement<any, string | JSXElementConstructor<any>>;
export type Components<T, C> = {[key in T]: C};
