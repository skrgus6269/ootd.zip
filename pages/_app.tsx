import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '@/styles/GlobalStyle';
import themes from '@/styles/theme';
import Script from 'next/script';
import { NEXT_PUBLIC_KAKAO_JS_KEY } from '@/constants/develop.constants';
import BottomNavBar from '@/components/BottomNavBar';
import { NextPage } from 'next';

declare global {
  // Kakao 함수를 전역에서 사용할 수 있도록 선언
  interface Window {
    Kakao: any;
  }
}
type NextPageWithLayout = NextPage & {
  Layout?: React.FC;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  function kakaoInit() {
    // 페이지가 로드되면 실행
    window.Kakao.init(NEXT_PUBLIC_KAKAO_JS_KEY);
  }

  const BottomLayout = Component.Layout || BottomNavBar;

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={themes}>
        <BottomLayout>
          <Component {...pageProps} />
        </BottomLayout>
        <Script
          src="https://developers.kakao.com/sdk/js/kakao.js"
          onLoad={kakaoInit}
        ></Script>
      </ThemeProvider>
    </>
  );
}
