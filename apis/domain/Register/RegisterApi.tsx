import { postRegistUserInfoPayload } from '@/apis/_api/type';
import { authService } from '@/apis/_service';
import { useState } from 'react';

export const RegisterApi = () => {
  const [error, setError] = useState<any>();
  //닉네임 중복 확인
  const checkName = async (name: string) => {
    try {
      const { result } = await authService.checkName(name);

      return result;
    } catch (err) {
      console.log('에러명', err);
      setError(err);
    }
  };

  //유저정보 제출
  const postRegistUserInfo = async (payload: postRegistUserInfoPayload) => {
    try {
      const { statusCode } = await authService.postRegistUserInfo(payload);

      if (statusCode === 200) return true;
      return false;
    } catch (err) {
      console.log('에러명', err);
      setError(err);
    }
  };

  //유저정보 입력 유무 확인
  const getCheckCompleteRegistUserInfo = async () => {
    try {
      const { result } = await authService.getCheckCompleteRegistUserInfo();

      return result;
    } catch (err) {
      console.log('에러명', err);
      setError(err);
    }
  };
  if (error) throw error;
  return {
    checkName,
    postRegistUserInfo,
    getCheckCompleteRegistUserInfo,
  };
};
