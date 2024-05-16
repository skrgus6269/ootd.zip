import { paginationType } from '@/apis/_api/type';
import { userService } from '@/apis/_service';
import { useState } from 'react';

export const AlarmApi = () => {
  const [error, setError] = useState<any>(null);

  //이미 읽은 알림 조회
  const getIsReadAlarm = async (params: paginationType) => {
    try {
      const { result } = await userService.getIsReadAlarm(params);
      return result;
    } catch (err) {
      console.log('에러명', err);
      setError(err);
    }
  };

  //읽지 않은 알림 조회
  const getNotIsReadAlarm = async (params: paginationType) => {
    try {
      const { result } = await userService.getNotIsReadAlarm(params);
      return result;
    } catch (err) {
      console.log('에러명', err);
      setError(err);
    }
  };

  //알람 읽음
  const readAlarm = async (userId: number) => {
    try {
      const { result } = await userService.readAlarm(userId);
      return result;
    } catch (err) {
      console.log('에러명', err);
    }
  };

  //읽지 않은 알림 유무 조회
  const getExistIsNotReadAlarm = async () => {
    try {
      const { result } = await userService.getExistIsNotReadAlarm();
      return result;
    } catch (err) {
      console.log('에러명', err);
      setError(err);
    }
  };
  if (error) throw error;
  return {
    getIsReadAlarm,
    getNotIsReadAlarm,
    readAlarm,
    getExistIsNotReadAlarm,
  };
};
