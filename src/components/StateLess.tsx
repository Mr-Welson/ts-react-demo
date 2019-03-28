import * as React from 'react';

// SFC（函数式组件）: stateless function components 
// 使用 SFC类型 可以避免我们重复定义 children、 propTypes、 contextTypes、 defaultProps、displayName 的类型。
// v16.7起，由于hooks的加入，函数式组件也可以使用state，所以这个命名不准确。新的react声明文件里，也定义了React.FC类型

// const Button = ({ onClick, title }) => (
//   <button onClick={onClick}>{title}</butto>
// )

// export interface IProps {
//   onClick: React.MouseEvent<HTMLElement>;
// }

type IProps = { 
  onClick(e: React.MouseEvent<HTMLElement>): void 
};

const Button: React.SFC<IProps> = ({ onClick }) => (
  <button onClick={onClick}>  </button>
)

export default Button;