import { postClothPayload } from '@/apis/_api/type';
import { systemService, userService } from '@/apis/_service';

export default function ClothApi() {
  //cloth 작성
  const postCloth = async (payload: postClothPayload) => {
    try {
      const { result } = await userService.postCloth(payload);

      return result;
    } catch (err) {
      alert('관리자에게 문의하세요');
      console.log('에러명:', err);
    }
  };

  //유저의 cloth 리스트 조회
  const getUserClothList = async (id: number) => {
    try {
      const { result } = await userService.getUserClothList(id);

      return result;
    } catch (err) {
      alert('관리자에게 문의하세요');
      console.log('에러명:', err);
    }
  };

  //cloth 상세 정보 조회
  const getClothDetail = async (id: number) => {
    try {
      const { result } = await userService.getClothDetail(id);

      return result;
    } catch (err) {
      alert('관리자에게 문의하세요');
      console.log('에러명:', err);
    }
  };

  //cloth 삭제
  const deleteCloth = async (id: number) => {
    try {
      const { result } = await userService.deleteCloth(id);

      return result;
    } catch (err) {
      alert('관리자에게 문의하세요');
      console.log('에러명:', err);
    }
  };

  //카테고리 가져오기
  const getClothCategory = async () => {
    const { result } = await systemService.getClothCategory();

    return result;
  };

  //색상 가져오기
  const getColor = async () => {
    const { result } = await systemService.getClothColor();

    return result;
  };

  //브랜드 가져오기
  const getBrand = async (keyword: string) => {
    const { result } = await systemService.getBrand(keyword);

    return result;
  };
  return {
    postCloth,
    getUserClothList,
    getClothDetail,
    deleteCloth,
    getClothCategory,
    getColor,
    getBrand,
  };
}
