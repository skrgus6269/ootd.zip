import AppBar from '@/components/Appbar';
import S from './style';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useRouter } from 'next/router';
import { Title1 } from '@/components/UI';
import Header from '@/components/Header';
import SettingBlock from '@/components/Setting/SettingBlock';

export default function Setting() {
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
          middleProps={<Title1>설정</Title1>}
          rightProps={<></>}
        />

        <S.MyAccount>
          <Header text="내 계정" />
          <SettingBlock
            text="소셜로그인 정보"
            buttonClick={() => router.push('/SocialLoginInfo')}
          />
          <SettingBlock
            text="내 취향정보 수정"
            buttonClick={() => router.push('/LikeInfo')}
          />
          <SettingBlock
            text="차단한 계정"
            buttonClick={() => router.push('/BlockedAccount')}
          />
        </S.MyAccount>

        <S.ServiceInfo>
          <Header text="서비스 정보" />
          <SettingBlock text="문의하기" />
          <SettingBlock
            text="이용 정책"
            buttonClick={() => router.push('/UsagePolicy')}
          />
          <SettingBlock
            text="패널티 정책"
            buttonClick={() => router.push('/PanaltyInfo')}
          />
          <SettingBlock
            text="커뮤니티 가이드라인"
            buttonClick={() => router.push('/CommunityGuideline')}
          />
          <SettingBlock
            text="개인정보 처리 방침"
            buttonClick={() => router.push('/PrivacyPolicy')}
          />
          <SettingBlock
            text="오픈소스 라이선스"
            buttonClick={() => router.push('/License')}
          />
        </S.ServiceInfo>
      </S.Layout>
    </>
  );
}
