import * as React from 'react';

export interface IProps {
  count: number;
}

const Button: React.SFC<IProps> = ({ count }) => (
  <div> {count} </div>
)

export default Button