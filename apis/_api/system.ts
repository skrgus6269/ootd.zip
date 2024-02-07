import fetcher from '../fetcher';

export const getClothCategory = async () => {
  const { data } = await fetcher.get('/api/v1/category');

  return data;
};
