import { authApi } from '@/apis/_api';
import { postRegistUserInfoPayload } from '../_api/type';

export const login = async (platform: string, code: string) => {
  const data = await authApi.login(platform, code);

  return data;
};

export const checkName = async (name: string) => {
  const data = await authApi.checkName(name);

  return data;
};

export const postRegistUserInfo = async (
  payload: postRegistUserInfoPayload
) => {
  const data = await authApi.postRegistUserInfo(payload);

  return data;
};

export const getCheckCompleteRegistUserInfo = async () => {
  const data = await authApi.getCheckCompleteRegistUserInfo();

  return data;
};

export const getUserId = async () => {
  const data = await authApi.getUserId();

  return data;
};
