import {
  NEXT_PUBLIC_KAKAO_URI,
  NEXT_PUBLIC_GOOGLE_URI,
} from '@/constants/develop.constants';
import { useRouter } from 'next/router';

// 로그인 하는 플랫폼에 따라 redirect 해주는 훅
export const useSNSLogin = () => {
  const router = useRouter();

  const routing = (platform: string) => {
    console.log(platform);
    switch (platform) {
      case 'KAKAO': {
        window.Kakao.Auth.authorize({
          redirectUri: NEXT_PUBLIC_KAKAO_URI,
        });
        break;
      }
      case 'GOOGLE': {
        router.push(NEXT_PUBLIC_GOOGLE_URI);
      }
    }
  };

  return [routing];
};
