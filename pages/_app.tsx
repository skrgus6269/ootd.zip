import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '@/styles/GlobalStyle';
import themes from '@/styles/theme';
import Script from 'next/script';
import { NEXT_PUBLIC_KAKAO_JS_KEY } from '@/constants/develop.constants';
import AppLayout from '../AppLayout';
import { NextPage } from 'next';
import { RecoilRoot } from 'recoil';
import '@/styles/font/font.css';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

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

  const queryClient = new QueryClient();

  const Layout = Component.Layout || AppLayout;

  return (
    <RecoilRoot>
      <>
        <QueryClientProvider client={queryClient}>
          {/* <ReactQueryDevtools /> */}
          <GlobalStyles />
          <ThemeProvider theme={themes}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
            <Script
              src="https://developers.kakao.com/sdk/js/kakao.js"
              onLoad={kakaoInit}
            ></Script>
          </ThemeProvider>
        </QueryClientProvider>
      </>
    </RecoilRoot>
  );
}
