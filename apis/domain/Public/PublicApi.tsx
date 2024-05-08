import { authService, userService } from '@/apis/_service';
import { sendReactNativeMessage } from '@/utils/reactNativeMessage';
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
    const { accessToken, refreshToken } = await authService
      .getNewToken()
      .catch((err) => {
        window.location.replace('/sign-in');
      });

    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    sendReactNativeMessage({ type: 'accessToken', payload: accessToken });
    sendReactNativeMessage({ type: 'refreshToken', payload: refreshToken });
  };

  return {
    follow,
    unFollow,
    getUserId,
    getNewToken,
  } as const;
};
