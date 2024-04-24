import { authService } from '@/apis/_service';
import { setCookie } from '@/utils/Cookie';
import { sendReactNativeMessage } from '@/utils/reactNativeMessage';
import {
  NEXT_PUBLIC_APPLE_URI,
  NEXT_PUBLIC_KAKAO_URI,
} from '@/constants/develop.constants';
import { useRouter } from 'next/router';
import { QueryParams } from '@/pages/sign-in/[...callback]';

export const SignInApi = () => {
  const router = useRouter();

  // callback 페이지에서 사용하는  API
  const login = async (payload: QueryParams) => {
    // 액세스 토큰을 받아온다.
    const data = await authService.login(payload);
    console.log(data);
    if (data.statusCode == 400) {
      return false;
    }

    if (data.accessToken) {
      // 쿠키에 담아준다.
      setCookie('accessToken', data.accessToken, {
        path: '/',
        // 보안 설정은 배포 직전에 설정해주기
      });
      setCookie('refreshToken', data.refreshToken, {
        path: '/',
        // 보안 설정은 배포 직전에 설정해주기
      });

      sendReactNativeMessage({
        type: 'accessToken',
        payload: data.accessToken,
      });

      return true;
    }
  };

  // 로그인 하는 플랫폼에 따라 redirect 해주는 API
  const snsLogin = (platform: string) => {
    switch (platform) {
      case 'KAKAO': {
        router.push(NEXT_PUBLIC_KAKAO_URI);
        break;
      }
      case 'NAVER': {
        router.push(NEXT_PUBLIC_APPLE_URI);
        break;
      }
      case 'APPLE': {
        router.push(NEXT_PUBLIC_APPLE_URI);
        break;
      }
    }
  };
  return [login, snsLogin] as const;
};
