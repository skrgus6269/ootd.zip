import fetcher from '../fetcher';
import { NEXT_PUBLIC_DOMAIN_HOST } from '@/constants/develop.constants';
import { postRegistUserInfoPayload } from './type';
import { QueryParams } from '@/pages/sign-in/[...callback]';
import { getCookie } from '@/utils/Cookie';

export const login = async (payload: QueryParams) => {
  const { data } = await fetcher.get(
    `v1/login/oauth/code/${payload.callback![0]}?code=${payload.code}&state=${
      payload.state
    }`
  );

  return data;
};

export const kakaoLogin = async () => {
  window.Kakao.Auth.authorize({
    redirectUri: `${NEXT_PUBLIC_DOMAIN_HOST}/callback`,
  });
};

export const checkName = async (name: string) => {
  const { data } = await fetcher.get(`v1/user/check-name?name=${name}`);

  return data;
};

export const postRegistUserInfo = async (
  payload: postRegistUserInfoPayload
) => {
  const { data } = await fetcher.post(`v1/user/register`, payload);

  return data;
};

export const getCheckCompleteRegistUserInfo = async () => {
  const { data } = await fetcher.get(`v1/user/complete`);

  return data;
};

export const getUserId = async () => {
  const { data } = await fetcher.get('/v1/user/id');

  return data;
};

export const getNewToken = async () => {
  const requestData = new URLSearchParams();
  requestData.append('grantType', 'refresh_token');
  requestData.append('refreshToken', getCookie('refreshToken'));

  const data = await fetcher.post(`v1/oauth/token`, requestData);

  return data.data;
};
