import { authApi } from '@/apis';

export const login = async () => {
  const data = await authApi.login();

  return data;
};
