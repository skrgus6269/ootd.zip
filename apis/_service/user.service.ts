import { alarmApi, clothApi, ootdApi, userApi } from '@/apis/_api';
import {
  postOOTDPayload,
  patchOOTDIsPrivatePayload,
  postClothPayload,
  getUserBookmarkListPayload,
  postOOTDComentPayload,
  patchClothIsPrivateType,
  getOOTDParams,
  getOOTDCommentParams,
  getClothListParams,
  patchProfilePayload,
  getOOTDClothesParams,
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

//ootd 상세정보 조회
export const getOOTDDetail = async (id: number) => {
  const data = await ootdApi.getOOTDDetail(id);

  return data;
};

//ootd 전체 수정
export const putOOTD = async (ootdId: number, params: postOOTDPayload) => {
  const data = await ootdApi.putOOTD(ootdId, params);

  return data;
};

//ootd 삭제
export const deleteOOTD = async (id: number) => {
  const data = await ootdApi.deleteOOTD(id);

  return data;
};

//ootd 댓글 조회
export const getOOTDComment = async (params: getOOTDCommentParams) => {
  const data = await ootdApi.getOOTDComment(params);

  return data;
};

//ootd 댓글 등록
export const postOOTDComent = async (payload: postOOTDComentPayload) => {
  const data = await ootdApi.postOOTDComent(payload);

  return data;
};

//ootd 댓글 삭제
export const DeleteOOTDComent = async (id: number) => {
  const data = await ootdApi.DeleteOOTDComent(id);

  return data;
};

//ootd 내용, 공개/비공개 여부 수정
export const patchOOTDIsPrivate = async (
  ootdId: number,
  payload: patchOOTDIsPrivatePayload
) => {
  const data = await ootdApi.patchOOTDIsPrivate(ootdId, payload);

  return data;
};

//ootd 북마크 추가
export const postOOTDBookmark = async (id: number) => {
  const data = await ootdApi.postOOTDBookmark(id);

  return data;
};

//ootd 북마크 제거
export const deleteOOTDBookmark = async (id: number) => {
  const data = await ootdApi.deleteOOTDBookmark(id);

  return data;
};

//ootd 좋아요 추가
export const postOOTDLike = async (id: number) => {
  const data = await ootdApi.postOOTDLike(id);

  return data;
};

//ootd 좋아요 제거
export const deleteOOTDLike = async (id: number) => {
  const data = await ootdApi.deleteOOTDLike(id);

  return data;
};

//ootd 전체 조회
export const lookUpOOTDAll = async () => {
  const data = await ootdApi.lookUpOOTDAll();

  return data;
};

//유저의 다른 ootd 조회
export const otherOOTD = async (userId: number, ootdId: number) => {
  const data = await ootdApi.otherOOTD(userId, ootdId);

  return data;
};

//비슷한 OOTD 조회
export const getSimilarOOTD = async (ootdId: number) => {
  const data = await ootdApi.getSimilarOOTD(ootdId);

  return data;
};

//cloth 작성
export const postCloth = async (payload: postClothPayload) => {
  const data = await clothApi.postCloth(payload);

  return data;
};

//유저의 cloth 리스트 조회
export const getUserClothList = async (params: getClothListParams) => {
  const data = await clothApi.getUserClothList(params);

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

// 유저의 북마크 리스트 조회
export const getUserBookmarkList = async (
  params: getUserBookmarkListPayload
) => {
  const data = await ootdApi.getUserBookmarkList(params);

  return data;
};

//유저의 북마크 리스트 삭제
export const deleteBookmarkList = async (bookamrkIds: number[]) => {
  const data = await ootdApi.deleteBookmarkList(bookamrkIds);

  return data;
};

//cloth 수정
export const putCloth = async (id: number, payload: postClothPayload) => {
  const data = await clothApi.putCloth(id, payload);

  return data;
};

//cloth 공개여부 수정
export const patchClothIsPrivate = async (
  id: number,
  payload: patchClothIsPrivateType
) => {
  const data = await clothApi.patchClothIsPrivate(id, payload);

  return data;
};

//팔로잉
export const follow = async (id: number) => {
  const data = await userApi.follow(id);

  return data;
};

//언팔로잉
export const unFollow = async (id: number) => {
  const data = await userApi.unFollow(id);

  return data;
};

// 유저 프로필 정보 조회
export const getMypage = async (id: number) => {
  const data = await userApi.getMypage(id);

  return data;
};

// 나의 프로필 정보 조회
export const getProfile = async () => {
  const data = await userApi.getProfile();

  return data;
};

// 프로필 정보 업데이트
export const patchProfile = async (payload: patchProfilePayload) => {
  const data = await userApi.patchProfile(payload);

  return data;
};

//유저의 이미 읽은 알림 조회
export const getIsReadAlarm = async () => {
  const data = await alarmApi.getAlarm(true);

  return data;
};

//유저의 읽지 않은 알림 조회
export const getNotIsReadAlarm = async () => {
  const data = await alarmApi.getAlarm(false);

  return data;
};

//유저의 읽지 않은 알림 조회
export const readAlarm = async (userId: number) => {
  const data = await alarmApi.readAlarm(userId);

  return data;
};

//유저의 읽지 않은 알림 조회
export const getExistIsNotReadAlarm = async () => {
  const data = await alarmApi.getExistIsNotReadAlarm();

  return data;
};

//이 옷을 활용한 OOTD 조회
export const getOOTDWithCloth = async (params: getOOTDClothesParams) => {
  const data = await ootdApi.getOOTDWithCloth(params);

  return data;
};
