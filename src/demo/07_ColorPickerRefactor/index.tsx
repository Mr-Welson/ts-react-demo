/**
 *  React 的 父子通信
 */

import * as React from 'react';
import { IColor } from './color';
import ColorPicker from './ColorPicker';
import ColorDisplayer from './ColorDisplayer';

// 使用接口定义 state 的规范
interface IState {
  color: IColor;
}

// 定义一个Container类，使用泛型约束这个类的 props 和 state
class Container extends React.Component<{}, IState> {

  constructor(props:{}) {
    super(props);
    this.state = {
     color: {
       red: 90,
       green: 90,
       blue: 90
     }
    }
  }

  setColor = (newColor: IColor) => {
    this.setState({
      color: newColor
    })
  }

  render()  {
    const { color } = this.state;
    return (
     <div>
       <ColorDisplayer color={color}/>
       <ColorPicker color={color} setColor={this.setColor}/>
     </div>
    )
  }
}

export default Container;

