import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '@/styles/globalStyle';
import themes from '@/styles/theme';
import Script from 'next/script';
import { NEXT_PUBLIC_KAKAO_JS_KEY } from '@/constants/develop.constants';

declare global {
  // Kakao 함수를 전역에서 사용할 수 있도록 선언
  interface Window {
    Kakao: any;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  function kakaoInit() {
    // 페이지가 로드되면 실행
    window.Kakao.init(NEXT_PUBLIC_KAKAO_JS_KEY);
  }

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={themes}>
        <Component {...pageProps} />
        <Script
          src="https://developers.kakao.com/sdk/js/kakao.js"
          onLoad={kakaoInit}
        ></Script>
      </ThemeProvider>
    </>
  );
}
