import { IMemberEntity } from '../model/member';
import MemberMockData from './memberMockData';

class MemberAPI {
  private _clone(item: IMemberEntity[]) {
    return JSON.parse(JSON.stringify(item));
  }

  getAllMembers(): Array<IMemberEntity> {
    return this._clone(MemberMockData)
  }
}

export const memberApi = new MemberAPI();