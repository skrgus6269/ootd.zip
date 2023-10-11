import { loginState } from '@/utils/recoil/atom';
import { SetterOrUpdater, useRecoilState } from 'recoil';

const useIsUser = () => {
  const [isUser, setIsUser] = useRecoilState(loginState);

  return [isUser, setIsUser] as [boolean, SetterOrUpdater<boolean>];
};

export default useIsUser;
