/**
 *  使用 React 的 props
 */

import * as React from 'react';

// 使用接口定义 props 的规范
interface IProps {
  name: string
}

const Props = (props:IProps) => (
  <p> Hello，User: { props.name } ! </p>
);

export default Props;
