import { userService } from '@/apis/_service';
import { useState } from 'react';

export const MyPageApi = () => {
  const [error, setError] = useState<any>();
  const getUserBrand = async (userId: number) => {
    try {
      const { result } = await userService.getUserBrand(userId);

      return result;
    } catch (err) {
      setError(err);
    }
    if (error) throw error;
  };
  return {
    getUserBrand,
  } as const;
};
