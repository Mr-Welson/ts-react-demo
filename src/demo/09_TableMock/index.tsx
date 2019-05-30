/**
 *  React 的 父子通信
 */

import * as React from 'react';
import { IMemberEntity } from './model/member';
import { memberApi } from './api/memberApi';
import MemberRow from './MemberRow';


import  "./index.css";

// 使用接口定义 state 的规范
interface IState {
  members: IMemberEntity[]
}

// 定义一个Container类，使用泛型约束这个类的 props 和 state
class Container extends React.Component<{}, IState> {

  constructor(props: {}) {
    super(props);
    this.state = {
      members: []
    }
  }

  componentDidMount() {
    const members = memberApi.getAllMembers();
    this.setState({
      members
    })
  }

  render()  {
    return (
      <table className="table">
        <thead>
          <tr>
            <th className='avatar-td'>
              Avatar
            </th>
            <th  className='id-td'>
              Id
            </th>
            <th  className='name-td'>
              Name
            </th>
          </tr>
        </thead>
        <tbody>
          { this.state.members.map((member : IMemberEntity) => (
            <MemberRow key={member.id} member={member}/>
          ))}
        </tbody>
      </table>
    )
  }
}

export default Container;

