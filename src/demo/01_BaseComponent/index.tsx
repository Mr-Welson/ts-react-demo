/**
 *  React 的 基础组件
 */
import * as React from 'react';
// React 引入方式发生了变化

interface IProps { 
  onClick? (e: React.MouseEvent<HTMLElement>): void 
  children: React.ReactChild
};

// SFC（函数式组件）: stateless function components 
// 使用 SFC类型 可以避免我们重复定义 children、 propTypes、 contextTypes、 defaultProps、displayName 的类型。
// v16.7起，由于hooks的加入，函数式组件也可以使用state，所以这个命名不准确。新的react声明文件里，也定义了React.FC类型
const Button: React.SFC<IProps> = ({ onClick, children }) => (
  <button onClick={onClick}> {children}  </button>
)

// 编写基础 react 组件
const BaseComponent = () => {
  return (
    <div>
      <p> Hello component ! </p>
      <Button onClick={() => console.log('点击')}> 按钮 </Button>
    </div>

  );
}

export default BaseComponent;