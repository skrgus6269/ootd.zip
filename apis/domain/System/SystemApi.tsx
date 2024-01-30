import { systemService } from '@/apis/_service';

const SystemApi = () => {
  const getClothCategory = async () => {
    const clothCategory = await systemService.getClothCategory();

    return clothCategory;
  };

  return [getClothCategory];
};

export default SystemApi;
