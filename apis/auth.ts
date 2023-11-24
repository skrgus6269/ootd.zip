import fetcher from './fetcher';
import { NEXT_PUBLIC_DOMAIN_HOST } from '@/constants/develop.constants';

export const login = async (platform: string, code: string) => {
  const payload = {
    redirectUri: `${NEXT_PUBLIC_DOMAIN_HOST}/sign-in/${platform}/callback`,
    oauthProvider: platform.toUpperCase(),
    authorizationCode: code,
  };

  const { data } = await fetcher.post('api/v1/user/login', payload);

  return data;
};

export const kakaoLogin = async () => {
  window.Kakao.Auth.authorize({
    redirectUri: `${NEXT_PUBLIC_DOMAIN_HOST}/callback`,
  });
};
