import { BrandType } from '@/components/Brand';
import { ColorData } from '@/components/ColorList';
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

export const ClothColorList = atom<ColorData[]>({
  key: 'clothColorList',
  default: [],
});

export const myBrandList = atom<BrandType[]>({
  key: 'myBrandList',
  default: [],
});
