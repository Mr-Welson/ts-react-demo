import * as React from 'react';
import { ThemeContext } from './themeContext';

interface IProps {
  children: React.ReactNode
  onClick?: React.MouseEventHandler
}

const Button: React.SFC<IProps> = ({onClick, children}: IProps) => (
  <ThemeContext.Consumer>
    {({theme}) => (
      <button className={theme} onClick={onClick}>{ children }</button>
    )}
  </ThemeContext.Consumer>
)

export default Button;