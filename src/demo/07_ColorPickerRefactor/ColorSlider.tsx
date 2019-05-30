import * as React from 'react';

interface IProps {
  value: number;
  setColor: (value: number) => void;
}

const ColorSlider = (props: IProps) => {
  return (
    <input
      type="range"
      min='0'
      max='255'
      value={props.value}
      onChange={
        (e) => props.setColor(+e.target.value)
      }
    />
  )
}

export default ColorSlider;