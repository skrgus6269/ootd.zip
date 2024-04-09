import fetcher from '../fetcher';
import {
  getSearchUserParams,
  patchProfilePayload,
  putStylePayload,
} from './type';

export const follow = async (id: number) => {
  const { data } = await fetcher.post('v1/user/follow', { userId: id });

  return data;
};

export const unFollow = async (id: number) => {
  const { data } = await fetcher.post('v1/user/unfollow', { userId: id });

  return data;
};

export const getMypage = async (id: number) => {
  const { data } = await fetcher.get(`/v1/user/${id}/mypage`);

  return data;
};

export const getProfile = async () => {
  const { data } = await fetcher.get('/v1/user/profile');

  return data;
};

export const patchProfile = async (payload: patchProfilePayload) => {
  const { data } = await fetcher.patch(`v1/user/profile`, payload);

  return data;
};

export const getSearchUser = async (params: getSearchUserParams) => {
  const { data } = await fetcher.get(
    `/v1/user/search?name=${params.name}&page=${params.page}&size=${params.size}&searchType=USER`
  );

  return data;
};

export const getUserBrand = async (userId: number) => {
  const { data } = await fetcher.get(`/v1/brand/user/${userId}`);

  return data;
};

export const getUserStyle = async () => {
  const { data } = await fetcher.get(`/v1/user/user-styles`);

  return data;
};

export const putStyle = async (params: putStylePayload) => {
  const { data } = await fetcher.put(`/v1/user/user-styles`, params);

  return data;
};

export const deleteUser = async () => {
  const { data } = await fetcher.delete(`/v1/user`);

  return data;
};
