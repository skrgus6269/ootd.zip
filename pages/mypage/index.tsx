import AppBar from '@/components/Appbar';
import S from '@/style/mypage/style';
import { AiOutlineArrowLeft, AiOutlineSetting } from 'react-icons/ai';
import { useRouter } from 'next/router';
import Profile from '@/components/Domain/MyPage/Profile';
import Closet from '@/components/Domain/MyPage/Closet';
import { useState, useEffect } from 'react';
import Toast from '@/components/Toast';

export default function MyPage() {
  const router = useRouter();

  useEffect(() => {
    if (router.query.state !== '') {
      setQueryState(router.query.state as string);
    }
  }, []);

  const [queryState, setQueryState] = useState<string>('');

  return (
    <>
      <S.Layout>
        <AppBar
          leftProps={
            <AiOutlineArrowLeft
              onClick={() => router.back()}
              className="arrowleft"
            />
          }
          middleProps={<></>}
          rightProps={
            <AiOutlineSetting
              className="setting"
              onClick={() => router.push('/Setting')}
            />
          }
        />
        <Profile />
        <Closet />
        {queryState === 'editSuccess' && (
          <Toast text="프로필이 수정되었습니다." />
        )}
      </S.Layout>
    </>
  );
}
