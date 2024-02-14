import { userService } from '@/apis/_service';
import {
  postOOTDBookmarkPayload,
  postOOTDLikePayload,
  postOOTDPayload,
  deleteOOTDBookmarkPayload,
  deleteOOTDLikePayload,
  deleteOOTDPayload,
  patchOOTDContentsOrIsPrivatePayload,
  putOOTDPayload,
  getOOTDParams,
} from '@/apis/_api/type';

export const OOTDApi = () => {
  //ootd 조회
  const getOOTD = async (params: getOOTDParams) => {
    const data = await userService.getOOTD(params);

    return data;
  };

  //ootd 게시
  const postOOTD = async (payload: postOOTDPayload) => {
    const data = await userService.postOOTD(payload);

    if (data.statusCode === 200) {
      return true;
    } else {
      return false;
    }
  };

  //ootd 전체 수정
  const putOOTD = async (params: putOOTDPayload) => {
    const data = await userService.putOOTD(params);
    return data;
  };

  //ootd 삭제
  const deleteOOTD = async (params: deleteOOTDPayload) => {
    const data = await userService.deleteOOTD(params);
    return data;
  };

  //ootd 내용, 공개/비공개 여부 수정
  const patchOOTDContentsOrIsPrivate = async (
    payload: patchOOTDContentsOrIsPrivatePayload
  ) => {
    const data = await userService.patchOOTDContentsOrIsPrivate(payload);
    return data;
  };

  //ootd 북마크 추가
  const postOOTDBookmark = async (params: postOOTDBookmarkPayload) => {
    const data = await userService.postOOTDBookmark(params);
    return data;
  };

  //ootd 북마크 제거
  const deleteOOTDBookmark = async (params: deleteOOTDBookmarkPayload) => {
    const data = await userService.deleteOOTDBookmark(params);
    return data;
  };

  //ootd 좋아요 추가
  const postOOTDLike = async (params: postOOTDLikePayload) => {
    const data = await userService.postOOTDLike(params);
    return data;
  };

  //ootd 좋아요 제거
  const deleteOOTDLike = async (params: deleteOOTDLikePayload) => {
    const data = await userService.deleteOOTDLike(params);
    return data;
  };

  //ootd 전체 조회
  const lookUpOOTDAll = async () => {
    const data = await userService.lookUpOOTDAll();
    return data;
  };

  return [
    postOOTD,
    getOOTD,
    putOOTD,
    deleteOOTD,
    patchOOTDContentsOrIsPrivate,
    postOOTDBookmark,
    deleteOOTDBookmark,
    postOOTDLike,
    deleteOOTDLike,
    lookUpOOTDAll,
  ] as const;
};
