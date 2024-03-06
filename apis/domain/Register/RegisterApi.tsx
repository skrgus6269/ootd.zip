import { postRegistUserInfoPayload } from '@/apis/_api/type';
import { authService } from '@/apis/_service';

export const RegisterApi = () => {
  //유저정보 제출
  const postRegistUserInfo = async (payload: postRegistUserInfoPayload) => {
    try {
      const { statusCode } = await authService.postRegistUserInfo(payload);

      if (statusCode === 200) return true;
      return false;
    } catch (err) {
      alert('관리자에게 문의하세요');
      console.log('에러명', err);
    }
  };
  return {
    postRegistUserInfo,
  };
};
