import AppBar from '@/components/Appbar';
import S from './style';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useRouter } from 'next/router';
import { Title1 } from '@/components/UI';
import Header from '@/components/Header';
import SettingBlock from '@/components/Setting/SettingBlock';

export default function SocialLoginInfo() {
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
        <S.MyAccount>
          <Header text="소설로그인 정보" />
          <SettingBlock text="카카오" />
        </S.MyAccount>
        <SettingBlock
          text="탈퇴하기"
          buttonClick={() => router.push('/Withdraw')}
        />
      </S.Layout>
    </>
  );
}
