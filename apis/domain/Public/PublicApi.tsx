import { authService, userService } from '@/apis/_service';
import { setCookie } from '@/utils/Cookie';

export const PublicApi = () => {
  const follow = async (id: number) => {
    const data = await userService.follow(id);
    return data;
  };

  const unFollow = async (id: number) => {
    const data = await userService.unFollow(id);
    return data;
  };

  const getUserId = async () => {
    const { result } = await authService.getUserId();

    return result;
  };

  const getNewToken = async () => {
    const { accessToken, refreshToken } = await authService.getNewToken();

    setCookie('accessToken', accessToken, { path: '/' });
    setCookie('refreshToken', refreshToken, { path: '/' });
  };

  return {
    follow,
    unFollow,
    getUserId,
    getNewToken,
  } as const;
};
