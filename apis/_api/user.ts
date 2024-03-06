import fetcher from '../fetcher';

export const follow = async (id: number) => {
  const { data } = await fetcher.post('api/v1/user/follow', { userId: id });

  return data;
};

export const unFollow = async (id: number) => {
  const { data } = await fetcher.post('api/v1/user/unfollow', { userId: id });

  return data;
};

export const profile = async () => {
  const { data } = await fetcher.get('/api/v1/user/profile');

  return data;
};
