import fetcher from '../fetcher';
import {
  getClothListParams,
  patchClothIsPrivateType,
  postClothPayload,
} from './type';

//cloth 작성
export const postCloth = async (payload: postClothPayload) => {
  const { data } = await fetcher.post('/v1/clothes', payload);

  return data;
};

//유저의 cloth 리스트 조회
export const getUserClothList = async ({
  page,
  size,
  userId,
  brandIds,
  categoryIds,
  colorIds,
  isPrivate,
  searchText,
}: getClothListParams) => { 
  let url = `/api/v1/clothes?page=${page}&size=${size}&userId=${userId}&sortCriteria=createdAt&sortDirection=DESC&searchText=${searchText}`; 
  const brandUrl = brandIds?.map((item) => `brandIds=${item}`).join('&');
  const categoryUrl = categoryIds
    ?.map((item) => `categoryIds=${item}`)
    .join('&');
  const colorUrl = colorIds?.map((item) => `colorIds=${item}`).join('&');
  const isPrivateUrl =
    isPrivate !== undefined ? `isPrivate=${!isPrivate}` : null;

  if (brandUrl) url += `&${brandUrl}`;
  if (categoryUrl) url += `&${categoryUrl}`;
  if (colorUrl) url += `&${colorUrl}`;
  if (isPrivateUrl) url += `&${isPrivateUrl}`;

  const { data } = await fetcher.get(url);

  return data;
};

//cloth 상세 정보 조회
export const getClothDetail = async (id: number) => {
  const { data } = await fetcher.get(`/v1/clothes/${id}`);

  return data;
};

//cloth 삭제
export const deleteCloth = async (id: number) => {
  const { data } = await fetcher.delete(`/v1/clothes/${id}`);

  return data;
};

//cloth 수정
export const putCloth = async (clothId: number, payload: postClothPayload) => {
  const { data } = await fetcher.put(`/v1/clothes/${clothId}`, payload);

  return data;
};

//cloth 공개여부 수정
export const patchClothIsPrivate = async (
  clothId: number,
  payload: patchClothIsPrivateType
) => {
  const { data } = await fetcher.patch(`/v1/clothes/${clothId}`, payload);

  return data;
};
