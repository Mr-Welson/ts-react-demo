/**
 *  React 的 父子通信
 */

import * as React from 'react';

interface IProps {
  isVisible: boolean;
}

const divStyle = (isVisible: boolean): React.CSSProperties => ({
  width: isVisible ? '180px' : '0'
})

const Sidebar: React.StatelessComponent<IProps> = ({ isVisible, children }) => (
  <div
    id="side-nav"
    className='sidenav'
    style={divStyle(isVisible)}
  >
    {children}
  </div>
)

export default Sidebar;

