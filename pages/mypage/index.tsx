import AppBar from '@/components/Appbar';
import S from './style';
import { AiOutlineArrowLeft, AiOutlineSetting } from 'react-icons/ai';
import { useRouter } from 'next/router';
import Profile from '@/components/Domain/MyPage/Profile';
import Closet from '@/components/Domain/MyPage/Closet';

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
