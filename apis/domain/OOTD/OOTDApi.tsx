import { systemService, userService } from '@/apis/_service';
import {
  postOOTDPayload,
  patchOOTDIsPrivatePayload,
  postOOTDComentPayload,
} from '@/apis/_api/type';

export const OOTDApi = () => {
  //ootd 조회
  const getOOTD = async (id: number) => {
    try {
      const { result } = await userService.getOOTD(id);

      return result;
    } catch (err) {
      alert('관리자에게 문의하세요');
      console.log('에러명', err);
    }
  };

  //ootd 상세정보 조회
  const getOOTDDetail = async (id: number) => {
    try {
      const { result } = await userService.getOOTDDetail(id);

      return result;
    } catch (err) {
      alert('관리자에게 문의하세요');
      console.log('에러명', err);
    }
  };
  //ootd 게시
  const postOOTD = async (payload: postOOTDPayload) => {
    try {
      const { statusCode } = await userService.postOOTD(payload);

      if (statusCode === 200) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      alert('관리자에게 문의하세요');
      console.log('에러명', err);
    }
  };

  //ootd 전체 수정
  const putOOTD = async (ootdId: number, payload: postOOTDPayload) => {
    const data = await userService.putOOTD(ootdId, payload);
    return data;
  };

  //ootd 삭제
  const deleteOOTD = async (id: number) => {
    try {
      const data = await userService.deleteOOTD(id);
      return data;
    } catch (err) {
      alert('관리자에게 문의하세요');
      console.log('에러명', err);
    }
  };

  //ootd 댓글 조회
  const getOOTDComment = async (id: number) => {
    try {
      const data = await userService.getOOTDComment(id);
      return data;
    } catch (err) {
      alert('관리자에게 문의하세요');
      console.log('에러명', err);
    }
  };

  //ootd 댓글 작성
  const postOOTDComment = async (payload: postOOTDComentPayload) => {
    try {
      const data = await userService.postOOTDComent(payload);
      return data;
    } catch (err) {
      alert('관리자에게 문의하세요');
      console.log('에러명', err);
    }
  };

  //ootd 댓글 삭제
  const deleteOOTDComment = async (id: number) => {
    try {
      const data = await userService.DeleteOOTDComent(id);
      return data;
    } catch (err) {
      alert('관리자에게 문의하세요');
      console.log('에러명', err);
    }
  };
  //ootd 내용, 공개/비공개 여부 수정
  const patchOOTDIsPrivate = async (
    ootdId: number,
    payload: patchOOTDIsPrivatePayload
  ) => {
    try {
      const data = await userService.patchOOTDIsPrivate(ootdId, payload);
      return data;
    } catch (err) {
      alert('관리자에게 문의하세요');
      console.log('에러명', err);
    }
  };

  //ootd 북마크 추가
  const postOOTDBookmark = async (id: number) => {
    try {
      const data = await userService.postOOTDBookmark(id);
      return data;
    } catch (err) {
      alert('관리자에게 문의하세요');
      console.log('에러명', err);
    }
  };

  //ootd 북마크 제거
  const deleteOOTDBookmark = async (id: number[]) => {
    try {
      const data = await userService.deleteOOTDBookmark(id);

      if (data.statusCode === 200) {
        return data;
      }
    } catch (err) {
      alert('관리자에게 문의하세요');
      console.log('에러명', err);
    }
  };

  //ootd 좋아요 추가
  const postOOTDLike = async (id: number) => {
    try {
      const data = await userService.postOOTDLike(id);
      return data;
    } catch (err) {
      alert('관리자에게 문의하세요');
      console.log('에러명', err);
    }
  };

  //ootd 좋아요 제거
  const deleteOOTDLike = async (id: number) => {
    try {
      const data = await userService.deleteOOTDLike(id);
      return data;
    } catch (err) {
      alert('관리자에게 문의하세요');
      console.log('에러명', err);
    }
  };

  //ootd 전체 조회
  const lookUpOOTDAll = async () => {
    try {
      const data = await userService.lookUpOOTDAll();
      return data;
    } catch (err) {
      alert('관리자에게 문의하세요');
      console.log('에러명', err);
    }
  };

  //해당 유저의 다른 ootd 조회
  const otherOOTD = async (userId: number, ootdId: number) => {
    try {
      const { result } = await userService.otherOOTD(userId, ootdId);
      return result;
    } catch (err) {
      alert('관리자에게 문의하세요');
      console.log('에러명', err);
    }
  };

  //현재 ootd와 비슷한 ootd 조회
  const getSimilarOOTD = async (ootdId: number) => {
    try {
      const { result } = await userService.getSimilarOOTD(ootdId);
      return result;
    } catch (err) {
      alert('관리자에게 문의하세요');
      console.log('에러명', err);
    }
  };

  //스타일 조회
  const getStyle = async () => {
    try {
      const { result } = await systemService.getStyle();
      return result;
    } catch (err) {
      alert('관리자에게 문의하세요');
      console.log('에러명', err);
    }
  };

  return {
    postOOTD,
    getOOTD,
    getOOTDDetail,
    putOOTD,
    deleteOOTD,
    getOOTDComment,
    postOOTDComment,
    deleteOOTDComment,
    patchOOTDIsPrivate,
    postOOTDBookmark,
    deleteOOTDBookmark,
    postOOTDLike,
    deleteOOTDLike,
    lookUpOOTDAll,
    otherOOTD,
    getSimilarOOTD,
    getStyle,
  } as const;
};
