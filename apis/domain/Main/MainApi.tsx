import { userService } from '@/apis/_service';

export const MainApi = () => {
  const getLikeOOTD = async () => {
    try {
      const data = await userService.getLikeOOTD();
      if (data.statusCode === 200) return data.result;
      return data;
    } catch (err) {
      alert('관리자에게 문의하세요');
      console.log('에러명', err);
    }
  };
  return {
    getLikeOOTD,
  } as const;
};
