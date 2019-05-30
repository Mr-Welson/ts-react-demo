import { IMemberEntity } from '../model/member';

class MemberAPI {

  getAllMembers(): Promise<IMemberEntity[]> {
    const mockUrl = '/mock/memberMockData.json';
    return fetch(mockUrl)
      .then(res => res.json())
      .then(res => res.data)
  }
}

export const memberApi = new MemberAPI();