import * as React from 'react';
import { IColor } from './color';

interface Props {
  color : IColor;
}

const ColorDisplayer = (props: Props) => {
  const { red, green, blue } = props.color;
  const divStyle: React.CSSProperties = {
    width: '400px',
    height: '50px',
    lineHeight: '50px',
    textAlign: 'center',
    backgroundColor: `rgb(${red},${green},${blue})`
  }
  return (
    <div style={divStyle}>
      Color: [red: {red}, green: {green}, blue: {blue}]
    </div>
  )
}

export default ColorDisplayer
