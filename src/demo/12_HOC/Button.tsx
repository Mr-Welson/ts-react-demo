import * as React from 'react';
import { withThemeContext } from './themeContext';

interface IProps {
  theme: string
  children: JSX.Element
  onClick: any
}

const Button = (props: IProps) => (
  <button className={props.theme} onClick={props.onClick}>{ props.children }</button>
)

export default withThemeContext(Button);