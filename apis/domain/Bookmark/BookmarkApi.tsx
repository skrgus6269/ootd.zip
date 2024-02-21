import { getUserBookmarkListPayload } from '@/apis/_api/type';
import { userService } from '@/apis/_service';

export default function BookmarkApi() {
  //유저의 북마크 리스트 조회
  const getUserBookmarkList = async (params: getUserBookmarkListPayload) => {
    try {
      const { result } = await userService.getUserBookmarkList(params);

      return result;
    } catch (err) {
      alert('관리자에게 문의하세요');
      console.log('에러명:', err);
    }
  };

  return {
    getUserBookmarkList,
  };
}
