import { userApi } from '@/apis/_api';
import {
  postOOTDBookmarkPayload,
  postOOTDLikePayload,
  postOOTDPayload,
  DeleteOOTDBookmarkPayload,
  DeleteOOTDLikePayload,
  DeleteOOTDPayload,
  putOOTDContentsOrIsPrivatePayload,
  putOOTDPayload,
  GetOOTDParams,
} from '@/apis/_api/type';

//ootd 신규 등록
export const postOOTD = async (payload: postOOTDPayload) => {
  const data = await userApi.postOOTD(payload);

  return data;
};

//ootd 조회
export const getOOTD = async (params: GetOOTDParams) => {
  const data = await userApi.getOOTD(params);

  return data;
};

//ootd 전체 수정
export const putOOTD = async (params: putOOTDPayload) => {
  const data = await userApi.putOOTD(params);

  return data;
};

//ootd 삭제
export const deleteOOTD = async (params: DeleteOOTDPayload) => {
  const data = await userApi.deleteOOTD(params);

  return data;
};

//ootd 내용, 공개/비공개 여부 수정
export const putOOTDContentsOrIsPrivate = async (
  payload: putOOTDContentsOrIsPrivatePayload
) => {
  const data = await userApi.putOOTDContentsOrIsPrivate(payload);

  return data;
};

//ootd 북마크 추가
export const postOOTDBookmark = async (params: postOOTDBookmarkPayload) => {
  const data = await userApi.postOOTDBookmark(params);

  return data;
};

//ootd 북마크 제거
export const deleteOOTDBookmark = async (params: DeleteOOTDBookmarkPayload) => {
  const data = await userApi.deleteOOTDBookmark(params);

  return data;
};

//ootd 좋아요 추가
export const postOOTDLike = async (params: postOOTDLikePayload) => {
  const data = await userApi.postOOTDLike(params);

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
