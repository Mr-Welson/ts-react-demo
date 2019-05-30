/**
 *  React 的 父子通信
 */

import * as React from 'react';
import { IMemberEntity } from './model/member';
import { memberApi } from './api/memberApi';
import MemberRow from './MemberRow';
import MemberHead from './MemberHead';

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
    memberApi.getAllMembers().then(members => {
      this.setState({
        members
      })
    });
  }

  render()  {
    const { members } = this.state;
    return (
      <table className="table">
        <thead>
          <MemberHead />
        </thead>
        <tbody>
        { members.map((member : IMemberEntity) => (
          <MemberRow key={member.id} member={member}/>
        ))}
        </tbody>
      </table>
    )
  }
}

export default Container;

