import * as React from 'react';
import { IColor } from './color';

interface IProps {
  color: IColor;
  setColor: (color: IColor) => void
}

const ColorPicker = (props: IProps) => {
  return (
    <div>
      <label>
        <input
          type="range"
          min='0'
          max='255'
          value={props.color.red}
          onChange={
            (e) => props.setColor({
              ...props.color,
              red: +e.target.value,
            })
          }
        />
         red
      </label>
      <br/>
      <label>
        <input
          type="range"
          min='0'
          max='255'
          value={props.color.green}
          onChange={
            (e) => props.setColor({
              ...props.color,
              green: +e.target.value,
            })
          }
        />
         green
      </label>
      <br/>
      <label>
        <input
          type="range"
          min='0'
          max='255'
          value={props.color.blue}
          onChange={
            (e) => props.setColor({
              ...props.color,
              blue: +e.target.value,
            })
          }
        />
         blue
      </label>
    </div>
  )
}

export default ColorPicker;
