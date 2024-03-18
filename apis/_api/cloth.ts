import fetcher from '../fetcher';
import {
  getClothListParams,
  patchClothIsPrivateType,
  postClothPayload,
} from './type';

//cloth 작성
export const postCloth = async (payload: postClothPayload) => {
  const { data } = await fetcher.post('/api/v1/clothes', payload);

  return data;
};

//유저의 cloth 리스트 조회
export const getUserClothList = async ({
  page,
  size,
  userId,
}: getClothListParams) => {
  const { data } = await fetcher.get(
    `/api/v1/clothes?page=${page}&size=${size}&userId=${userId}`
  );

  return data;
};

//cloth 상세 정보 조회
export const getClothDetail = async (id: number) => {
  const { data } = await fetcher.get(`/api/v1/clothes/${id}`);

  return data;
};

//cloth 삭제
export const deleteCloth = async (id: number) => {
  const { data } = await fetcher.delete(`/api/v1/clothes/${id}`);

  return data;
};

//cloth 수정
export const putCloth = async (clothId: number, payload: postClothPayload) => {
  const { data } = await fetcher.put(`/api/v1/clothes/${clothId}`, payload);

  return data;
};

//cloth 공개여부 수정
export const patchClothIsPrivate = async (
  clothId: number,
  payload: patchClothIsPrivateType
) => {
  const { data } = await fetcher.patch(`/api/v1/clothes/${clothId}`, payload);

  return data;
};
