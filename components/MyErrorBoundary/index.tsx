// MyErrorBoundary.tsx
import React, { useEffect, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorLayout from './ErrorLayout';
import { Body3 } from '../UI';
import {
  getReactNativeMessage,
  sendReactNativeMessage,
} from '@/utils/reactNativeMessage';

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

function ErrorFallback({ error, resetErrorBoundary }: ErrorFallbackProps) {
  const [URLState, setURLState] = useState<Boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      getReactNativeMessage(setURLState);
    }
  }, []);

  const onClickCopyButton = () => {
    setURLState(false); // 재공유 toast 노출 초기화
    sendReactNativeMessage({ type: 'copyEmail' }); // native로 클립보드 복사 처리
  };
  if (error.message === '404') {
    return (
      <ErrorLayout
        headline="없는 페이지입니다."
        body={
          <>
            <Body3>존재하지 않는 페이지입니다.</Body3>
          </>
        }
        resetErrorBoundary={resetErrorBoundary}
      />
    );
  }
  if (error.message === '500') {
    return (
      <ErrorLayout
        headline="일시적인 오류입니다."
        body={
          <>
            <Body3>잠시 후 다시 시도해주세요.</Body3>
            <Body3>같은 문제가 반복될 경우 저희에게 알려주세요.</Body3>
            <div
              style={{
                display: 'inline-flex',
                gap: '12px',
                marginBottom: '12px',
                marginTop: '12px',
              }}
            >
              <Body3>문의: ootdzip@gamil.com</Body3>
              <Body3 onClick={onClickCopyButton} state="underline">
                복사하기
              </Body3>
            </div>
          </>
        }
        resetErrorBoundary={resetErrorBoundary}
        URLState={URLState}
      />
    );
  }
  if (error.message === '408') {
    return (
      <ErrorLayout
        headline="네트워크에 연결할 수 없습니다."
        body={
          <>
            <Body3>네트워크 연결 상태를 확인한 후 다시 시도해주세요.</Body3>
          </>
        }
        resetErrorBoundary={resetErrorBoundary}
      />
    );
  }
  return (
    <div role="alert">
      <p>{error.message}:</p>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

function MyErrorBoundary({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
  );
}

export default MyErrorBoundary;
