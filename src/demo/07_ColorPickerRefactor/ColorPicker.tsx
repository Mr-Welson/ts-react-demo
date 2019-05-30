import * as React from 'react';
import ColorSlider from './ColorSlider';
import { IColor } from './color';

interface IProps {
  color: IColor;
  setColor: (color: IColor) => void
}

const ColorPicker = (props: IProps) => {
  return (
    <div>
      <label>
        <ColorSlider
          value={props.color.red}
          setColor={(value) => {
            props.setColor({
              ...props.color,
              red: value
            })
          }} 
        />
        red
      </label>
      <br/>
      <label>
        <ColorSlider
          value={props.color.green}
          setColor={(value) => {
            props.setColor({
              ...props.color,
              green: value
            })
          }} 
        />
        green
      </label>
      <br/>
      <label>
        <ColorSlider
          value={props.color.blue}
          setColor={(value) => {
            props.setColor({
              ...props.color,
              blue: value
            })
          }} 
        />
        blue
      </label>
    </div>
  )
}

export default ColorPicker;
