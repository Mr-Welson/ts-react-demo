import * as React from 'react';
import { IMemberEntity } from './model/member';

interface IProps {
  member: IMemberEntity
}
const MemberRow = ({ member }:IProps) => (
  <tr>
    <td className='avatar-td'>
      <img src={member.avatarUrl} />
    </td>
    <td className='id-td'>
      <span>{member.id}</span>
    </td>
    <td className='name-td'>
      <span>{member.login}</span>
    </td>
  </tr>
);

export default MemberRow;

