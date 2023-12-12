import { systemService } from '@/service';

const useGetClothCategory = () => {
  const getClothCategory = async () => {
    const clothCategory = await systemService.getClothCategory();

    return clothCategory;
  };

  return [getClothCategory];
};

export default useGetClothCategory;
