import { authApi } from '@/apis';

export const login = async (platform: string, code: string) => {
  const data = await authApi.login(platform, code);

  return data;
};
