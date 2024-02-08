import { postClothPayload } from '@/apis/_api/type';
import { systemService, userService } from '@/apis/_service';

export default function ClothApi() {
  //cloth 작성
  const postCloth = async (payload: postClothPayload) => {
    const data = await userService.postCloth(payload);

    return data;
  };

  //유저의 cloth 리스트 조회
  const getUserClothList = async (id: number) => {
    const data = await userService.getUserClothList(id);

    return data;
  };

  //cloth 상세 정보 조회
  const getClothDetail = async (id: number) => {
    const data = await userService.getClothDetail(id);

    return data;
  };

  //cloth 삭제
  const deleteClothDetail = async (id: number) => {
    const data = await userService.deleteClothDetail(id);

    return data;
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

  return {
    postCloth,
    getUserClothList,
    getClothDetail,
    deleteClothDetail,
    getClothCategory,
    getColor,
  };
}
