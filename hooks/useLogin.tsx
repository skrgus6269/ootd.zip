import { authService } from '@/service';
import { setCookie } from '@/utils/Cookie';
import { sendReactNativeMessage } from '@/utils/reactNativeMessage';
import { useState } from 'react';

interface LoginPayload {
  platform: string;
  code: string;
}

// callback 페이지에서 사용하는 훅
export const useLogin = () => {
  const [loginSucess, setLoginSucess] = useState(true);

  const login = async (payload: LoginPayload) => {
    // 액세스 토큰을 받아온다.
    const data = await authService.login(payload.platform, payload.code);

    //----------------------------------------------------------------------
    //위 api의 결과에 따른 상태 업데이트는 api가 완성이 되고 나면 업데이트 예정

    //로그인 성공시
    setLoginSucess(true);

    // 쿠키에 담아준다.
    setCookie('accessToken', data, {
      path: '/',
      // 보안 설정은 배포 직전에 설정해주기
    });
    sendReactNativeMessage({
      type: 'accessToken',
      payload: data,
    });

    //로그인 실패시
    setLoginSucess(false);
    //----------------------------------------------------------------------
  };

  return [loginSucess, login] as const;
};
