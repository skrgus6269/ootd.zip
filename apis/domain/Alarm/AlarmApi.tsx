import { userService } from '@/apis/_service';

export const AlarmApi = () => {
  //이미 읽은 알림 조회
  const getIsReadAlarm = async () => {
    try {
      const { result } = await userService.getIsReadAlarm();
      return result;
    } catch (err) {
      alert('관리자에게 문의하세요');
      console.log('에러명', err);
    }
  };

  //읽지 않은 알림 조회
  const getNotIsReadAlarm = async () => {
    try {
      const { result } = await userService.getNotIsReadAlarm();
      return result;
    } catch (err) {
      alert('관리자에게 문의하세요');
      console.log('에러명', err);
    }
  };

  //알람 읽음
  const readAlarm = async (userId: number) => {
    try {
      const { result } = await userService.readAlarm(userId);
      return result;
    } catch (err) {
      alert('관리자에게 문의하세요');
      console.log('에러명', err);
    }
  };

  //읽지 않은 알림 유무 조회
  const getExistIsNotReadAlarm = async () => {
    try {
      const { result } = await userService.getExistIsNotReadAlarm();
      return result;
    } catch (err) {
      alert('관리자에게 문의하세요');
      console.log('에러명', err);
    }
  };

  return {
    getIsReadAlarm,
    getNotIsReadAlarm,
    readAlarm,
    getExistIsNotReadAlarm,
  };
};
