export interface IMemberEntity {
  id: number;
  login: string;
  avatarUrl: string;
}

export const createEmptyMenber = ():IMemberEntity => ({
  id: -1,
  login: '',
  avatarUrl: ''
})