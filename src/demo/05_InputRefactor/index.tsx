/**
 *  React 的 父子通信
 */

import * as React from 'react';
import ReactProps from '../02_Props/index';
import NameEdit from './NameEdit';

// 使用接口定义 props 的规范
interface IProps {}

// 使用接口定义 state 的规范
interface IState {
  name: string;
  updateName: string;
}

// 定义一个Container类，使用泛型约束这个类的 props 和 state
class Container extends React.Component<IProps, IState> {

  constructor(props:IProps) {
    super(props);
    this.state = {
      name: 'defaultName',
      updateName: 'defaultName'
    }
  }

  handleNameChange = (updateName: string) => {
    this.setState({
      updateName
    })
  }

  handleNameSubmit = () => {
    this.setState({
      name: this.state.updateName
    })
  }

  render()  {
    const { name, updateName } = this.state;
    const disabled = !updateName || updateName === name;
    return (
      <>
        <ReactProps name={name} />
        <NameEdit 
          name={updateName}
          disabled={disabled}
          onChange={this.handleNameChange}
          onSubmit={this.handleNameSubmit}
        />
      </>
    )
  }
}

export default Container;

