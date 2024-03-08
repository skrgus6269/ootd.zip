import { patchProfilePayload } from '@/apis/_api/type';
import { userService } from '@/apis/_service';

export const UserApi = () => {
  // 프로필 정보 조회
  const getProfile = async () => {
    try {
      const data = await userService.profile();
      if (data.statusCode === 200) {
        return data.result;
      }
      return data;
    } catch (err) {
      alert('관리자에게 문의하세요');
      console.log('에러명', err);
    }
  };

  // 프로필 정보 업데이트
  const patchProfile = async (payload: patchProfilePayload) => {
    try {
      const data = await userService.patchProfile(payload);
      return data;
    } catch (err) {
      alert('관리자에게 문의하세요');
      console.log('에러명', err);
    }
  };

  return {
    getProfile,
    patchProfile,
  } as const;
};
