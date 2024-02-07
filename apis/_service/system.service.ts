import { systemApi } from '@/apis/_api';

export const getClothCategory = async () => {
  const data = await systemApi.getClothCategory();

  return data;
};
