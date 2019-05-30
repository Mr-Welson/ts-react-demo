/**
 *  React 的 父子通信
 */

import * as React from 'react';
import Sidebar from './Sidebar';
import  "./sidebar.css";

// 使用接口定义 state 的规范
interface IState {
  isVisible: boolean
}

// 定义一个Container类，使用泛型约束这个类的 props 和 state
class Container extends React.Component<{}, IState> {

  constructor(props: {}) {
    super(props);
    this.state = {
      isVisible: false
    }
  }

  setSidebarVisible = () => {
    const isVisible = this.state.isVisible;
    this.setState({
      isVisible: !isVisible
    })
  }

  render()  {
    return (
      <div style={{width: '30%'}}>
        <button
          className='btn sidebar-toggle'
          style={{float: 'right'}}
          onClick={this.setSidebarVisible}
        >
          侧边栏开关
        </button>
        <Sidebar isVisible={this.state.isVisible}>
          <span>children 组件</span>
        </Sidebar>
      </div>
    )
  }
}

export default Container;

