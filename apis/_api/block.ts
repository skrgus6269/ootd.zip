import fetcher from '../fetcher';
import { getUserBlockListParams, postUserBlockPayload } from './type';

export const getUserBlock = async ({ page, size }: getUserBlockListParams) => {
  const { data } = await fetcher.get(
    `/v1/user-block?page=${page}&size=${size}&sortCriteria=createdAt&sortDirection=ASC`
  );

  return data;
};

export const postUserBlock = async (payload: postUserBlockPayload) => {
  const { data } = await fetcher.post('/v1/user-block', payload);

  return data;
};

export const deleteUserBlock = async (id: number) => {
  const { data } = await fetcher.delete(`/v1/user-block/${id}`);

  return data;
};
