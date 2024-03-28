import fetcher from '../fetcher';
import { getAlarmParams } from './type';

export const getAlarm = async ({ page, size, isRead }: getAlarmParams) => {
  const { data } = await fetcher.get(
    `/api/v1/notification?page=${page}&size=${size}&isRead=${isRead}`
  );

  return data;
};

export const readAlarm = async (alarmId: number) => {
  const { data } = await fetcher.patch(`/api/v1/notification/${alarmId}`);

  return data;
};

export const getExistIsNotReadAlarm = async () => {
  const { data } = await fetcher.get(`/api/v1/notification/exist`);

  return data;
};
