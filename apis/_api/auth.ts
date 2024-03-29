import fetcher from '../fetcher';
import { NEXT_PUBLIC_DOMAIN_HOST } from '@/constants/develop.constants';
import { postRegistUserInfoPayload } from './type';

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

export const checkName = async (name: string) => {
  const { data } = await fetcher.get(`api/v1/user/check-name?name=${name}`);

  return data;
};

export const postRegistUserInfo = async (
  payload: postRegistUserInfoPayload
) => {
  const { data } = await fetcher.post(`api/v1/user/register`, payload);

  return data;
};

export const getCheckCompleteRegistUserInfo = async () => {
  const { data } = await fetcher.get(`api/v1/user/complete`);

  return data;
};

export const getUserId = async () => {
  const { data } = await fetcher.get('/api/v1/user/token/info');

  return data;
};
