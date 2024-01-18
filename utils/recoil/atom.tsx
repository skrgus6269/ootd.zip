import { atom } from 'recoil';

export const loginStates = atom<boolean>({
  key: 'loginState',
  default: false,
});

export const userNames = atom<string>({
  key: 'userNames',
  default: '',
});

export const BottomNavbarPlusButtonState = atom<Boolean>({
  key: 'bottomNavbarPlusButtonState',
  default: false,
});
