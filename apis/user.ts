import fetcher from './fetcher';
import {
  AddOOTDBookmarkPayload,
  AddOOTDLikePayload,
  AddOOTDPayload,
  DeleteOOTDBookmarkPayload,
  DeleteOOTDLikePayload,
  DeleteOOTDParams,
  FixOOTDContentsOrIsPrivatePayload,
  FixOOTDPayload,
  GetOOTDParams,
} from './type';

//ootd 작성
export const addOOTD = async (payload: AddOOTDPayload) => {
  const { data } = await fetcher.post('api/v1/ootd/', payload);

  return data;
};

//ootd 조회
export const getOOTD = async (params: GetOOTDParams) => {
  const { data } = await fetcher.get(`api/v1/ootd/${params.id}`);

  return data;
};

//ootd 전체 수정
export const fixOOTD = async (payload: FixOOTDPayload) => {
  const { data } = await fetcher.put(`api/v1/ootd/`, payload);

  return data;
};

//ootd 삭제
export const deleteOOTD = async (payload: DeleteOOTDParams) => {
  const { data } = await fetcher.delete(`api/v1/ootd/`, { data: payload });

  return data;
};

//ootd 내용, 공개/비공개 여부 수정
export const fixOOTDContentsOrIsPrivate = async (
  payload: FixOOTDContentsOrIsPrivatePayload
) => {
  const { data } = await fetcher.patch(`api/v1/ootd/`, payload);

  return data;
};

//ootd 북마크 추가
export const addOOTDBookmark = async (payload: AddOOTDBookmarkPayload) => {
  const { data } = await fetcher.post(`api/v1/ootd/bookmark/`, payload);

  return data;
};

//ootd 북마크 제거
export const deleteOOTDBookmark = async (
  payload: DeleteOOTDBookmarkPayload
) => {
  const { data } = await fetcher.delete(`api/v1/ootd/bookmark`, {
    data: payload,
  });

  return data;
};

//ootd 좋아요 추가
export const addOOTDLike = async (payload: AddOOTDLikePayload) => {
  const { data } = await fetcher.post(`api/v1/ootd/like/`, payload);

  return data;
};

//ootd 좋아요 제거
export const deleteOOTDLike = async (payload: DeleteOOTDLikePayload) => {
  const { data } = await fetcher.delete(`api/v1/ootd/like/`, { data: payload });

  return data;
};

//ootd 전체 조회
export const lookUpOOTDAll = async () => {
  const { data } = await fetcher.get('/api/v1/ootd/all');

  return data;
};
