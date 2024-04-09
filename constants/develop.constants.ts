//자체 개발 관련 상수
export const NEXT_PUBLIC_API_HOST = process.env.NEXT_PUBLIC_API_HOST;
export const NEXT_PUBLIC_DOMAIN_HOST = process.env.NEXT_PUBLIC_DOMAIN_HOST;

//구글 인증 관련 상수
export const NEXT_PUBLIC_GOOGLE_CLIENT_ID =
  process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
export const NEXT_PUBLIC_GOOGLE_REDIRECT_URI =
  process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI;
export const NEXT_PUBLIC_GOOGLE_URI =
  `https://accounts.google.com/o/oauth2/v2/auth?client_id=${NEXT_PUBLIC_GOOGLE_CLIENT_ID}` +
  `&redirect_uri=${NEXT_PUBLIC_GOOGLE_REDIRECT_URI}` +
  '&response_type=code' +
  '&scope=email profile';

//카카오 인증 관련 상수
export const NEXT_PUBLIC_KAKAO_JS_KEY = process.env.NEXT_PUBLIC_KAKAO_JS_KEY;
export const NEXT_PUBLIC_KAKAO_URI = `${NEXT_PUBLIC_DOMAIN_HOST}/sign-in/kakao/callback`;

//애플 인증 관련 상수

export const NEXT_PUBLIC_APPLE_CLIENT_ID =
  process.env.NEXT_PUBLIC_APPLE_CLIENT_ID;
export const NEXT_PUBLIC_APPLE_REDIRECT_RUI = `https://ootdzip.com/sign-in/apple/callback`;
export const NEXT_PUBLIC_APPLE_STATE = process.env.NEXT_PUBLIC_APPLE_STATE;
export const NEXT_PUBLIC_APPLE_SCOPE = '';
export const NEXT_PUBLIC_APPLE_URI =
  `https://appleid.apple.com/auth/authorize?response_type=code` +
  `&redirect_uri=${NEXT_PUBLIC_APPLE_REDIRECT_RUI}` +
  `&client_id=${NEXT_PUBLIC_APPLE_CLIENT_ID}` +
  `&state=${NEXT_PUBLIC_APPLE_STATE}`;
