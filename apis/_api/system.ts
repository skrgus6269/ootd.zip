import fetcher from '../fetcher';

export const getClothCategory = async () => {
  const { data } = await fetcher.get('/api/v1/category');

  return data;
};

export const getColor = async () => {
  const { data } = await fetcher.get('/api/v1/color/');

  return data;
};

export const getBrand = async (keyword: string) => {
  const { data } = await fetcher.get(`/api/v1/brand?brandName=${keyword}`);

  return data;
};

export const getSize = async (id: number) => {
  const { data } = await fetcher.get(`/api/v1/size?categoryId=${id}`);

  return data;
};
