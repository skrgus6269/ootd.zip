import axios from 'axios';
import { NEXT_PUBLIC_API_HOST } from '@/constants/develop.constants';
import { getCookie } from '@/utils/Cookie';

const fetcher = axios.create({
  baseURL: NEXT_PUBLIC_API_HOST,
  timeout: 2500,
});

fetcher.interceptors.request.use((config) => {
  const accessToken = getCookie('accessToken');

  // 로그인, 회원가입 단계 api에서는 accessToken이 없으니 바로 return
  if (accessToken === undefined) return config;

  // 그 외의 api 에서는 accessToken을 사용해 사용자 인증
  config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
});

export default fetcher;
