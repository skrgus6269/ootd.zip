import fetcher from '../fetcher';
import {
  patchOOTDIsPrivatePayload,
  postOOTDPayload,
  getUserBookmarkListPayload,
  postOOTDComentPayload,
} from './type';

//ootd 작성
export const postOOTD = async (payload: postOOTDPayload) => {
  const { data } = await fetcher.post('api/v1/ootd', payload);

  return data;
};

//ootd 조회
export const getOOTD = async (id: number) => {
  const { data } = await fetcher.get(`api/v1/ootd/${id}`);

  return data;
};

//ootd 전체 수정
export const putOOTD = async (payload: postOOTDPayload) => {
  const { data } = await fetcher.put(`api/v1/ootd`, payload);

  return data;
};

//ootd 삭제
export const deleteOOTD = async (id: number) => {
  const { data } = await fetcher.delete(`api/v1/ootd/${id}`);

  return data;
};

//ootd 내용, 공개/비공개 여부 수정
export const patchOOTDIsPrivate = async (
  payload: patchOOTDIsPrivatePayload
) => {
  const { data } = await fetcher.patch(`api/v1/ootd`, payload);

  return data;
};

//ootd 북마크 추가
export const postOOTDBookmark = async (id: number) => {
  const { data } = await fetcher.post(`api/v1/ootd/bookmark/${id}`);

  return data;
};

//ootd 북마크 제거
export const deleteOOTDBookmark = async (id: number) => {
  const { data } = await fetcher.delete(`api/v1/ootd/bookmark/${id}`);

  return data;
};

//ootd 좋아요 추가
export const postOOTDLike = async (id: number) => {
  const { data } = await fetcher.post(`api/v1/ootd/like/${id}`);

  return data;
};

//ootd 좋아요 제거
export const deleteOOTDLike = async (id: number) => {
  const { data } = await fetcher.delete(`api/v1/ootd/like/${id}`);

  return data;
};

//ootd 전체 조회
export const lookUpOOTDAll = async () => {
  const { data } = await fetcher.get('/api/v1/ootd/all');

  return data;
};

//유저의 북마크 리스트 조회
export const getUserBookmarkList = async (
  payload: getUserBookmarkListPayload
) => {
  const { data } = await fetcher.get(
    `/api/v1/bookmarks?page=${payload.page}&size=${payload.size}&sortCriteria=${payload.sortCriteria}&sortDirection=${payload.sortDirection}`
  );
};

//ootd 작성자의 다른 ootd 조회
export const otherOOTD = async (userId: number, ootdId: number) => {
  const { data } = await fetcher.get(
    `/api/v1/ootd/other?page=0&size=20&userId=${userId}&ootdId=${ootdId}`
  );

  return data;
};

//해당 ootd와 비슷한 ootd
export const getSimilarOOTD = async (ootdId: number) => {
  const { data } = await fetcher.get(
    `/api/v1/ootd/similar?page=0&size=20&ootdId=${ootdId}`
  );

  return data;
};

//ootd 댓글 조회
export const getOOTDComment = async (ootdId: number) => {
  const { data } = await fetcher.get(
    `/api/v1/comments?page=0&size=20&ootdId=${ootdId}`
  );

  return data;
};

//ootd 댓글 등록
export const postOOTDComent = async (payload: postOOTDComentPayload) => {
  const { data } = await fetcher.post(`/api/v1/comment`, payload);

  return data;
};

//ootd 댓글 삭제
export const DeleteOOTDComent = async (commentId: number) => {
  const { data } = await fetcher.delete(`/api/v1/comment/${commentId}`);

  return data;
};
