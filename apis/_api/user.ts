import fetcher from '../fetcher';
import { patchProfilePayload } from './type';

export const follow = async (id: number) => {
  const { data } = await fetcher.post('api/v1/user/follow', { userId: id });

  return data;
};

export const unFollow = async (id: number) => {
  const { data } = await fetcher.post('api/v1/user/unfollow', { userId: id });

  return data;
};

export const getMypage = async (id: number) => {
  const { data } = await fetcher.get(`/api/v1/user/${id}/mypage`);

  return data;
};

export const getProfile = async () => {
  const { data } = await fetcher.get('/api/v1/user/profile');

  return data;
};

export const patchProfile = async (payload: patchProfilePayload) => {
  const { data } = await fetcher.patch(`api/v1/user/profile`, payload);

  return data;
};
