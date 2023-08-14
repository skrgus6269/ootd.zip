import {
  NEXT_PUBLIC_KAKAO_URI,
  NEXT_PUBLIC_GOOGLE_URI,
} from '@/constants/develop.constants';
import { useRouter } from 'next/router';

// 로그인 하는 플랫폼에 따라 redirect 해주는 훅
export const useSNSLogin = () => {
  const router = useRouter();

  const routing = (platform: string) => {
    switch (platform) {
      case 'kakao': {
        window.Kakao.Auth.authorize({
          redirectUri: NEXT_PUBLIC_KAKAO_URI,
        });
      }
      case 'google': {
        router.push(NEXT_PUBLIC_GOOGLE_URI);
      }
    }
  };

  return { routing };
};
