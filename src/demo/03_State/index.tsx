/**
 *  使用 React 的 state
 */

import * as React from 'react';
import ReactProps from '../02_Props/index';
import Edit from './Edit';

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

  // form 的 change事件类型
  // handleNameChange = (e: React.FormEvent<HTMLInputElement>) => {
  //   this.setState({
  //     name: e.currentTarget.value
  //   })
  // }

   // onChange 的事件类型
  handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      name: e.target.value
    })
  }

  render()  {
    const { name } = this.state;
    return (
      <>
        <ReactProps name={name} />
        <Edit name={name} onChange={this.handleNameChange} />
      </>
    )
  }
}

export default Container;

