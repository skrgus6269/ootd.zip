import { userService } from '@/apis/_service';

export const MyPageApi = () => {
  const getUserBrand = async (userId: number) => {
    const { result } = await userService.getUserBrand(userId);

    return result;
  };

  return {
    getUserBrand,
  } as const;
};
