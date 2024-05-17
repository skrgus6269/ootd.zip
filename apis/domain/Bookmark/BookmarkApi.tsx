import { getUserBookmarkListPayload } from '@/apis/_api/type';
import { userService } from '@/apis/_service';
import { useState } from 'react';

export default function BookmarkApi() {
  const [error, setError] = useState<any>(null);

  //유저의 북마크 리스트 조회
  const getUserBookmarkList = async (params: getUserBookmarkListPayload) => {
    try {
      const { result } = await userService.getUserBookmarkList(params);

      return result;
    } catch (err) {
      console.log('에러명:', err);
      setError(err);
    }
  };

  const deleteBookmarkList = async (params: number[]) => {
    try {
      const result = await userService.deleteBookmarkList(params);
      console.log(result);
      return result;
    } catch (err) {
      console.log('에러명:', err);
      setError(err);
    }
  };
  if (error) throw error;
  return {
    getUserBookmarkList,
    deleteBookmarkList,
  };
}
