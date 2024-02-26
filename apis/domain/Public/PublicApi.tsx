import { userService } from '@/apis/_service';

export const PublicApi = () => {
  const follow = async (id: number) => {
    const data = await userService.follow(id);
    return data;
  };

  const unFollow = async (id: number) => {
    const data = await userService.unFollow(id);
    return data;
  };

  return {
    follow,
    unFollow,
  } as const;
};
