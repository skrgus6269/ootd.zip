import fetcher from './fetcher';

export const login = async () => {
  const { data } = await fetcher.get('/');

  return data;
};

export const kakaoLogin = async () => {};
