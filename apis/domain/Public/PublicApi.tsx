import { authService, userService } from '@/apis/_service';

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
  return {
    follow,
    unFollow,
    getUserId,
  } as const;
};
