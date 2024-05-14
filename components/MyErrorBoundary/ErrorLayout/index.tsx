import { Button3, Headline2 } from '@/components/UI';
import S from './style';
import { useRouter } from 'next/router';
import Portal from '@/components/Portal';
import Toast from '@/components/Toast';

interface ErrorLayoutPropsType {
  headline: string;
  body: React.ReactNode;
  resetErrorBoundary: () => void;
  URLState?: Boolean;
}

export default function ErrorLayout({
  headline,
  body,
  URLState,
  resetErrorBoundary,
}: ErrorLayoutPropsType) {
  const router = useRouter();

  const onClickPrev = () => {
    router.back();
    resetErrorBoundary();
  };

  return (
    <Portal>
      <S.Layout>
        <S.Alert>
          <Headline2>{headline}</Headline2>
          <S.Body>{body}</S.Body>
          <S.Button>
            <button onClick={onClickPrev} className="left">
              <Button3>이전 화면으로 돌아가기</Button3>
            </button>
            <button onClick={() => resetErrorBoundary()} className="right">
              <Button3>다시 시도하기</Button3>
            </button>
          </S.Button>
        </S.Alert>
        {URLState && <Toast text="이메일이 클립보드에 복사되었습니다." />}
      </S.Layout>
    </Portal>
  );
}
