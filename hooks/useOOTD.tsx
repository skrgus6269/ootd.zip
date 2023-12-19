import { userService } from '@/service';
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
} from '@/apis/type';

export const useOOTD = () => {
  //ootd 게시
  const addOOTD = async (payload: AddOOTDPayload) => {
    const data = await userService.addOOTD(payload);

    if (data.statusCode === 200) {
      return true;
    } else {
      return false;
    }
  };

  //ootd 조회
  const getOOTD = async (params: GetOOTDParams) => {
    const data = await userService.getOOTD(params);

    return data;
  };

  //ootd 전체 수정
  const fixOOTD = async (params: FixOOTDPayload) => {
    const data = await userService.fixOOTD(params);
    return data;
  };

  //ootd 삭제
  const deleteOOTD = async (params: DeleteOOTDPayload) => {
    const data = await userService.deleteOOTD(params);
    return data;
  };

  //ootd 내용, 공개/비공개 여부 수정
  const fixOOTDContentsOrIsPrivate = async (
    payload: FixOOTDContentsOrIsPrivatePayload
  ) => {
    const data = await userService.fixOOTDContentsOrIsPrivate(payload);
    return data;
  };

  //ootd 북마크 추가
  const addOOTDBookmark = async (params: AddOOTDBookmarkPayload) => {
    const data = await userService.addOOTDBookmark(params);
    return data;
  };

  //ootd 북마크 제거
  const deleteOOTDBookmark = async (params: DeleteOOTDBookmarkPayload) => {
    const data = await userService.deleteOOTDBookmark(params);
    return data;
  };

  //ootd 좋아요 추가
  const addOOTDLike = async (params: AddOOTDLikePayload) => {
    const data = await userService.addOOTDLike(params);
    return data;
  };

  //ootd 좋아요 제거
  const deleteOOTDLike = async (params: DeleteOOTDLikePayload) => {
    const data = await userService.deleteOOTDLike(params);
    return data;
  };

  //ootd 전체 조회
  const lookUpOOTDAll = async () => {
    const data = await userService.lookUpOOTDAll();
    return data;
  };

  return [
    addOOTD,
    getOOTD,
    fixOOTD,
    deleteOOTD,
    fixOOTDContentsOrIsPrivate,
    addOOTDBookmark,
    deleteOOTDBookmark,
    addOOTDLike,
    deleteOOTDLike,
    lookUpOOTDAll,
  ] as const;
};
