import fetcher from '../fetcher';
import {
  deleteOOTDBookmarkPayload,
  deleteOOTDLikePayload,
  deleteOOTDPayload,
  getOOTDParams,
  patchOOTDContentsOrIsPrivatePayload,
  postOOTDBookmarkPayload,
  postOOTDLikePayload,
  postOOTDPayload,
  putOOTDPayload,
  getUserBookmarkListPayload,
} from './type';

//ootd 작성
export const postOOTD = async (payload: postOOTDPayload) => {
  const { data } = await fetcher.post('api/v1/ootd/', payload);

  return data;
};

//ootd 조회
export const getOOTD = async (params: getOOTDParams) => {
  const { data } = await fetcher.get(`api/v1/ootd/${params.id}`);

  return data;
};

//ootd 전체 수정
export const putOOTD = async (payload: putOOTDPayload) => {
  const { data } = await fetcher.put(`api/v1/ootd/`, payload);

  return data;
};

//ootd 삭제
export const deleteOOTD = async (payload: deleteOOTDPayload) => {
  const { data } = await fetcher.delete(`api/v1/ootd/`, { data: payload });

  return data;
};

//ootd 내용, 공개/비공개 여부 수정
export const patchOOTDContentsOrIsPrivate = async (
  payload: patchOOTDContentsOrIsPrivatePayload
) => {
  const { data } = await fetcher.patch(`api/v1/ootd/`, payload);

  return data;
};

//ootd 북마크 추가
export const postOOTDBookmark = async (payload: postOOTDBookmarkPayload) => {
  const { data } = await fetcher.post(`api/v1/ootd/bookmark/`, payload);

  return data;
};

//ootd 북마크 제거
export const deleteOOTDBookmark = async (
  payload: deleteOOTDBookmarkPayload
) => {
  const { data } = await fetcher.delete(`api/v1/ootd/bookmark`, {
    data: payload,
  });

  return data;
};

//ootd 좋아요 추가
export const postOOTDLike = async (payload: postOOTDLikePayload) => {
  const { data } = await fetcher.post(`api/v1/ootd/like/`, payload);

  return data;
};

//ootd 좋아요 제거
export const deleteOOTDLike = async (payload: deleteOOTDLikePayload) => {
  const { data } = await fetcher.delete(`api/v1/ootd/like/`, { data: payload });

  return data;
};

//ootd 전체 조회
export const lookUpOOTDAll = async () => {
  const { data } = await fetcher.get('/api/v1/ootd/all');

  return data;
};

//유저의 북마크 리스트 조회
export const getUserBookmarkList = async (
  params: getUserBookmarkListPayload
) => {
  const { data } = await fetcher.get(
    `/api/v1/bookmarks?page=${params.page}&size=${params.size}&sortCriteria=${params.sortCriteria}&sortDirection=${params.sortDirection}`
  );

  return data;
};
