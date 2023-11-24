import { atom } from 'recoil';

export const loginStates = atom<boolean>({
  key: 'loginState',
  default: false,
});
