import { userApi } from '@/apis/_api';
import {
  AddOOTDBookmarkPayload,
  AddOOTDLikePayload,
  AddOOTDPayload,
  DeleteOOTDBookmarkPayload,
  DeleteOOTDLikePayload,
  DeleteOOTDPayload,
  FixOOTDContentsOrIsPrivatePayload,
  FixOOTDPayload,
  GetOOTDParams,
} from '@/apis/_api/type';

//ootd 신규 등록
export const addOOTD = async (payload: AddOOTDPayload) => {
  const data = await userApi.addOOTD(payload);

  return data;
};

//ootd 조회
export const getOOTD = async (params: GetOOTDParams) => {
  const data = await userApi.getOOTD(params);

  return data;
};

//ootd 전체 수정
export const fixOOTD = async (params: FixOOTDPayload) => {
  const data = await userApi.fixOOTD(params);

  return data;
};

//ootd 삭제
export const deleteOOTD = async (params: DeleteOOTDPayload) => {
  const data = await userApi.deleteOOTD(params);

  return data;
};

//ootd 내용, 공개/비공개 여부 수정
export const fixOOTDContentsOrIsPrivate = async (
  payload: FixOOTDContentsOrIsPrivatePayload
) => {
  const data = await userApi.fixOOTDContentsOrIsPrivate(payload);

  return data;
};

//ootd 북마크 추가
export const addOOTDBookmark = async (params: AddOOTDBookmarkPayload) => {
  const data = await userApi.addOOTDBookmark(params);

  return data;
};

//ootd 북마크 제거
export const deleteOOTDBookmark = async (params: DeleteOOTDBookmarkPayload) => {
  const data = await userApi.deleteOOTDBookmark(params);

  return data;
};

//ootd 좋아요 추가
export const addOOTDLike = async (params: AddOOTDLikePayload) => {
  const data = await userApi.addOOTDLike(params);

  return data;
};

//ootd 좋아요 제거
export const deleteOOTDLike = async (params: DeleteOOTDLikePayload) => {
  const data = await userApi.deleteOOTDLike(params);

  return data;
};

//ootd 전체 조회
export const lookUpOOTDAll = async () => {
  const data = await userApi.lookUpOOTDAll();

  return data;
};
