import AppBar from '@/components/Appbar';
import S from '@/style/EditMypage/style';
import { AiOutlineArrowLeft, AiOutlineSetting } from 'react-icons/ai';
import { useRouter } from 'next/router';
import Edit from '@/components/Domain/MyPage/Edit';

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
          rightProps={<></>}
        />
        <Edit />
      </S.Layout>
    </>
  );
}
