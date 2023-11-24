import { authService } from '@/service';
import { setCookie } from '@/utils/Cookie';
import { sendReactNativeMessage } from '@/utils/reactNativeMessage';
import { useRecoilState } from 'recoil';
import { loginStates } from '@/utils/recoil/atom';

interface LoginPayload {
  platform: string;
  code: string;
}

// callback 페이지에서 사용하는 훅
export const useLogin = () => {
  const [loginState, setLogin] = useRecoilState(loginStates);
  const login = async (payload: LoginPayload) => {
    // 액세스 토큰을 받아온다.
    const data = await authService.login(payload.platform, payload.code);

    if (data.statusCode == 400) {
      return false;
    }

    if (data.accessToken) {
      // 쿠키에 담아준다.
      setCookie('accessToken', data.accessToken, {
        path: '/',
        // 보안 설정은 배포 직전에 설정해주기
      });

      sendReactNativeMessage({
        type: 'accessToken',
        payload: data.accessToken,
      });

      setLogin(true);

      return true;
    }
  };

  return [login] as const;
};
