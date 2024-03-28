import { ImageWithTag } from '@/components/Domain/AddOOTD/TagModal';
import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const loginStates = atom<boolean>({
  key: 'loginState',
  default: false,
});

export const userNames = atom<string>({
  key: 'userNames',
  default: '',
});

export const storedImageKey = atom<ImageWithTag | undefined>({
  key: 'storedImageKey',
  default: undefined,
  effects_UNSTABLE: [persistAtom],
});

export const userId = atom<number>({
  key: 'userId',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});
