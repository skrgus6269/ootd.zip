import { getUserBlockListParams, postUserBlockPayload } from '@/apis/_api/type';
import { userService } from '@/apis/_service';

export const BlockApi = () => {
  // 사용자 차단 리스트 조회
  const getUserBlock = async (params: getUserBlockListParams) => {
    try {
      const { result } = await userService.getUserBlock(params);
      return result;
    } catch (err) {
      alert('관리자에게 문의하세요');
      console.log('에러명', err);
    }
  };

  // 사용자 차단
  const postUserBlock = async (payload: postUserBlockPayload) => {
    try {
      const { result } = await userService.postUserBlock(payload);
      return result;
    } catch (err) {
      alert('관리자에게 문의하세요');
      console.log('에러명', err);
    }
  };

  // 사용자 차단 해제
  const deleteUserBlock = async (id: number) => {
    try {
      const { result } = await userService.deleteUserBlock(id);
      return result;
    } catch (err) {
      alert('관리자에게 문의하세요');
      console.log('에러명', err);
    }
  };

  return {
    getUserBlock,
    postUserBlock,
    deleteUserBlock,
  };
};
