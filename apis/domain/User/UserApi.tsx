import { userService } from '@/apis/_service';

export const UserApi = () => {
  // 프로필 정보 조회
  const getProfile = async () => {
    try {
      const data = await userService.profile();
      return data;
    } catch (err) {
      alert('관리자에게 문의하세요');
      console.log('에러명', err);
    }
  };

  return {
    getProfile,
  } as const;
};
