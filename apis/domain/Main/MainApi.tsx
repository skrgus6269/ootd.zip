import { userService } from '@/apis/_service';
import { useState } from 'react';

export const MainApi = () => {
  const [error, setError] = useState<any>();
  const getLikeOOTD = async () => {
    try {
      const data = await userService.getLikeOOTD();
      if (data.statusCode === 200) return data.result;
      return data;
    } catch (err) {
      console.log('에러명', err);
      setError(err);
    }
  };

  const getSameClothDifferentOOTD = async () => {
    try {
      const data = await userService.getSameClothDifferentOOTD();
      if (data.statusCode === 200) return data.result;
      return data;
    } catch (err) {
      console.log('에러명', err);
      setError(err);
    }
  };
  if (error) throw error;
  return {
    getLikeOOTD,
    getSameClothDifferentOOTD,
  } as const;
};
