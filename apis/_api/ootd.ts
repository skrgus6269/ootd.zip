import fetcher from '../fetcher';
import {
  getOOTDCommentParams,
  getOOTDParams,
  patchOOTDIsPrivatePayload,
  postOOTDPayload,
  getUserBookmarkListPayload,
  postOOTDComentPayload,
  getOOTDClothesParams,
  getSearchOOTDParams,
} from './type';

//ootd 작성
export const postOOTD = async (payload: postOOTDPayload) => {
  const { data } = await fetcher.post('v1/ootd', payload);

  return data;
};

//ootd 조회
export const getOOTD = async ({
  page,
  size,
  sortCriteria,
  sortDirection,
  userId,
}: getOOTDParams) => {
  const { data } = await fetcher.get(
    `v1/ootd?page=${page}&size=${size}&userId=${userId}&sortCriteria=${sortCriteria}&sortDirection=${sortDirection}`
  );

  return data;
};

//ootd 상세정보 조회
export const getOOTDDetail = async (id: number) => {
  const { data } = await fetcher.get(`v1/ootd/${id}`);

  return data;
};

//ootd 전체 수정
export const putOOTD = async (ootdId: number, payload: postOOTDPayload) => {
  const { data } = await fetcher.put(`v1/ootd/${ootdId}`, payload);

  return data;
};

//ootd 삭제
export const deleteOOTD = async (id: number) => {
  const { data } = await fetcher.delete(`v1/ootd/${id}`);

  return data;
};

//ootd 내용, 공개/비공개 여부 수정
export const patchOOTDIsPrivate = async (
  ootdId: number,
  payload: patchOOTDIsPrivatePayload
) => {
  const { data } = await fetcher.patch(`v1/ootd/${ootdId}`, payload);

  return data;
};

//ootd 북마크 추가
export const postOOTDBookmark = async (id: number) => {
  const { data } = await fetcher.post(`v1/ootd/bookmark/${id}`);

  return data;
};

//ootd 북마크 제거
export const deleteOOTDBookmark = async (id: number) => {
  const { data } = await fetcher.delete(`v1/ootd/bookmark/${id}`);

  return data;
};

//ootd 좋아요 추가
export const postOOTDLike = async (id: number) => {
  const { data } = await fetcher.post(`v1/ootd/like/${id}`);

  return data;
};

//ootd 좋아요 제거
export const deleteOOTDLike = async (id: number) => {
  const { data } = await fetcher.delete(`v1/ootd/like/${id}`);

  return data;
};

//ootd 전체 조회
export const lookUpOOTDAll = async () => {
  const { data } = await fetcher.get('/v1/ootd/all');

  return data;
};

//유저의 북마크 리스트 조회
export const getUserBookmarkList = async (
  payload: getUserBookmarkListPayload
) => {
  const { data } = await fetcher.get(
    `/v1/bookmarks?page=${payload.page}&size=${payload.size}&sortCriteria=${payload.sortCriteria}&sortDirection=${payload.sortDirection}`
  );

  return data;
};

//유저의 북마크 리스트 삭제
export const deleteBookmarkList = async (bookamrkIds: number[]) => {
  const { data } = await fetcher.delete(
    `/v1/bookmarks?ootdBookmarkIds=${bookamrkIds}`
  );

  return data;
};

//ootd 작성자의 다른 ootd 조회
export const otherOOTD = async (userId: number, ootdId: number) => {
  const { data } = await fetcher.get(
    `/v1/ootd/other?page=0&size=8&userId=${userId}&ootdId=${ootdId}`
  );

  return data;
};

//해당 ootd와 비슷한 ootd
export const getSimilarOOTD = async (ootdId: number) => {
  const { data } = await fetcher.get(
    `/v1/ootd/similar?page=0&size=6&ootdId=${ootdId}&sortDirection=ASC`
  );

  return data;
};

//ootd 댓글 조회
export const getOOTDComment = async ({
  page,
  size,
  ootdId,
}: getOOTDCommentParams) => {
  const { data } = await fetcher.get(
    `v1/comments?page=${page}&size=${size}&ootdId=${ootdId}`
  );

  return data;
};

//ootd 댓글 등록
export const postOOTDComent = async (payload: postOOTDComentPayload) => {
  const { data } = await fetcher.post(`/v1/comment`, payload);

  return data;
};

//ootd 댓글 삭제
export const DeleteOOTDComent = async (commentId: number) => {
  const { data } = await fetcher.delete(`/v1/comment/${commentId}`);

  return data;
};

//이 옷으로 이루어진 OOTD 조회
export const getOOTDWithCloth = async ({
  page,
  size,
  sortCriteria,
  sortDirection,
  clothesId,
}: getOOTDClothesParams) => {
  const { data } = await fetcher.get(
    `v1/ootd/clothes?page=${page}&size=${size}&sortCriteria=${sortCriteria}&sortDirection=${sortDirection}&clothesId=${clothesId}`
  );

  return data;
};

export const getSearchOOTD = async (params: getSearchOOTDParams) => {
  let url = `/v1/ootd/search?searchText=${params.searchText}&page=${params.page}&size=${params.size}&sortCriteria=${params.sortCriteria}&writerGender=${params.writerGender}`;

  const brandIds = params.brandIds?.map((item) => `brandIds=${item}`).join('&');
  const categoryIds = params.categoryIds
    ?.map((item) => `categoryIds=${item}`)
    .join('&');
  const colorIds = params.colorIds?.map((item) => `colorIds=${item}`).join('&');

  if (brandIds) url += `&${brandIds}`;
  if (categoryIds) url += `&${categoryIds}`;
  if (colorIds) url += `&${colorIds}`;

  const { data } = await fetcher.get(url);

  return data;
};

export const getLikeOOTD = async () => {
  const { data } = await fetcher.get('v1/ootd-like');

  return data;
};

export const getSameClothDifferentOOTD = async () => {
  const { data } = await fetcher.get('v1/home/scdf?page=0&size=4');

  return data;
};
