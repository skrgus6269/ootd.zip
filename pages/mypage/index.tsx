import AppBar from '@/components/Appbar';
import S from './style';
import { AiOutlineArrowLeft, AiOutlineSetting } from 'react-icons/ai';
import Profile from '@/components/MyPage/Profile';
import Closet from '@/components/MyPage/Closet';
import { useRouter } from 'next/router';

export default function MyPage() {
  const router = useRouter();

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
          rightProps={<AiOutlineSetting className="setting" />}
        />
        <Profile />
        <Closet />
      </S.Layout>
    </>
  );
}
