import fetcher from '../fetcher';

export const getAlarm = async (isRead: Boolean) => {
  const { data } = await fetcher.get(
    `/api/v1/notification?page=0&size=10&isRead=${isRead}`
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
