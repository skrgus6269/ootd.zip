import { clothApi, ootdApi } from '@/apis/_api';
import {
  postOOTDBookmarkPayload,
  postOOTDLikePayload,
  postOOTDPayload,
  putOOTDPayload,
  deleteOOTDPayload,
  deleteOOTDBookmarkPayload,
  deleteOOTDLikePayload,
  patchOOTDContentsOrIsPrivatePayload,
  getOOTDParams,
  postClothPayload,
  getUserBookmarkListPayload,
} from '@/apis/_api/type';

//ootd 신규 등록
export const postOOTD = async (payload: postOOTDPayload) => {
  const data = await ootdApi.postOOTD(payload);

  return data;
};

//ootd 조회
export const getOOTD = async (params: getOOTDParams) => {
  const data = await ootdApi.getOOTD(params);

  return data;
};

//ootd 전체 수정
export const putOOTD = async (params: putOOTDPayload) => {
  const data = await ootdApi.putOOTD(params);

  return data;
};

//ootd 삭제
export const deleteOOTD = async (params: deleteOOTDPayload) => {
  const data = await ootdApi.deleteOOTD(params);

  return data;
};

//ootd 내용, 공개/비공개 여부 수정
export const patchOOTDContentsOrIsPrivate = async (
  payload: patchOOTDContentsOrIsPrivatePayload
) => {
  const data = await ootdApi.patchOOTDContentsOrIsPrivate(payload);

  return data;
};

//ootd 북마크 추가
export const postOOTDBookmark = async (params: postOOTDBookmarkPayload) => {
  const data = await ootdApi.postOOTDBookmark(params);

  return data;
};

//ootd 북마크 제거
export const deleteOOTDBookmark = async (params: deleteOOTDBookmarkPayload) => {
  const data = await ootdApi.deleteOOTDBookmark(params);

  return data;
};

//ootd 좋아요 추가
export const postOOTDLike = async (params: postOOTDLikePayload) => {
  const data = await ootdApi.postOOTDLike(params);

  return data;
};

//ootd 좋아요 제거
export const deleteOOTDLike = async (params: deleteOOTDLikePayload) => {
  const data = await ootdApi.deleteOOTDLike(params);

  return data;
};

//ootd 전체 조회
export const lookUpOOTDAll = async () => {
  const data = await ootdApi.lookUpOOTDAll();

  return data;
};

//cloth 작성
export const postCloth = async (payload: postClothPayload) => {
  const data = await clothApi.postCloth(payload);

  return data;
};

//유저의 cloth 리스트 조회
export const getUserClothList = async (id: number) => {
  const data = await clothApi.getUserClothList(id);

  return data;
};

//cloth 상세 정보 조회
export const getClothDetail = async (id: number) => {
  const data = await clothApi.getClothDetail(id);

  return data;
};

//cloth 삭제
export const deleteCloth = async (id: number) => {
  const data = await clothApi.deleteCloth(id);

  return data;
};

export const getUserBookmarkList = async (
  params: getUserBookmarkListPayload
) => {
  const data = await ootdApi.getUserBookmarkList(params);

  return data;
};
