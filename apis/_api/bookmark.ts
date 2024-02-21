import fetcher from '../fetcher';
import { getUserBookmarkListPayload } from './type';

//유저의 북마크 리스트 조회
export const getUserBookmarkList = async (
  params: getUserBookmarkListPayload
) => {
  const { data } = await fetcher.get(
    `/api/v1/bookmarks?page=${params.page}&size=${params.size}&sortCriteria=${params.sortCriteria}&sortDirection=${params.sortDirection}`
  );

  return data;
};
