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
  return { getIsReadAlarm, getNotIsReadAlarm };
};
