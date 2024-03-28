import { getSearchUserParams, patchProfilePayload } from '@/apis/_api/type';
import { userService } from '@/apis/_service';

export const UserApi = () => {
  // 사용자 프로필 정보 조회
  const getMypage = async (id: number) => {
    try {
      const data = await userService.getMypage(id);
      if (data.statusCode === 200) {
        return data.result;
      }
      return data;
    } catch (err) {
      alert('관리자에게 문의하세요');
      console.log('에러명', err);
    }
  };

  // 프로필 정보 조회
  const getProfile = async () => {
    try {
      const data = await userService.getProfile();
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
      const { statusCode } = await userService.patchProfile(payload);
      if (statusCode === 200) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      alert('관리자에게 문의하세요');
      console.log('에러명', err);
    }
  };

  const getSearchUser = async (params: getSearchUserParams) => {
    try {
      const data = await userService.getSearchUser(params);
      if (data.statusCode === 200) {
        return data.result;
      }
      return data;
    } catch (err) {
      alert('관리자에게 문의하세요');
      console.log('에러명', err);
    }
  };

  return {
    getMypage,
    getProfile,
    patchProfile,
    getSearchUser,
  } as const;
};
