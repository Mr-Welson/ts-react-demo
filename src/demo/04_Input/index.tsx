/**
 *  React 的 函数作为props传递
 */


import * as React from 'react';
import ReactProps from '../02_Props/index';
import NameEdit from './NameEdit';

// 使用接口定义 props 的规范
interface IProps {}

// 使用接口定义 state 的规范
interface IState {
  name: string
}

// 定义一个Container类，使用泛型约束这个类的 props 和 state
class Container extends React.Component<IProps, IState> {

  constructor(props:IProps) {
    super(props);
    this.state = {
      name: 'defaultName'
    }
  }

  handleNameChange = (name: string) => {
    this.setState({
      name
    })
  }

  render()  {
    const { name } = this.state;
    return (
      <>
        <ReactProps name={name} />
        <NameEdit initName={name} onChange={this.handleNameChange} />
      </>
    )
  }
}

export default Container;

