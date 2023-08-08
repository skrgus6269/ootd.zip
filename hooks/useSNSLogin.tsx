import { NEXT_PUBLIC_DOMAIN_HOST } from '@/constants/develop.constants';

// 로그인 하는 플랫폼에 따라 redirect 해주는 훅
const useSNSLogin = (platform: string) => {
  switch (platform) {
    case 'kakao': {
      window.Kakao.Auth.authorize({
        redirectUri: `${NEXT_PUBLIC_DOMAIN_HOST}/sign-in/kakao/callback`,
      });
    }
  }
};

export default useSNSLogin;
