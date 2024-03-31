import AppBar from '@/components/Appbar';
import S from '@/pageStyle/setting/style';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useRouter } from 'next/router';
import { Title1 } from '@/components/UI';
import Header from '@/components/Header';
import SettingBlock from '@/components/Setting/SettingBlock';
import {
  getReactNativeMessage,
  sendReactNativeMessage,
} from '@/utils/reactNativeMessage';
import Toast from '@/components/Toast';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export default function Setting() {
  const router = useRouter();

  const [queryState, setQueryState] = useState<string>('');
  const [URLState, setURLState] = useState<any>(false);

  const shareButton = () => {
    console.log('이메일 복사');
    setURLState(false); // 재공유 toast 노출 초기화
    sendReactNativeMessage({ type: 'copyEmail' }); // native로 클립보드 복사 처리
  };

  useEffect(() => {
    if (router.query.state !== '') {
      setQueryState(router.query.state as string);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      getReactNativeMessage(setURLState);
    }
  }, []);

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
            buttonClick={() => router.push('/social-login-info')}
          />
          <SettingBlock
            text="내 취향정보 수정"
            buttonClick={() => router.push('/like-info')}
          />
          <SettingBlock
            text="차단한 계정"
            buttonClick={() => router.push('/blocked-account')}
          />
        </S.MyAccount>

        <S.ServiceInfo>
          <Header text="서비스 정보" />
          <SettingBlock text="문의하기" shareButton={shareButton} />
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
        {URLState && <Toast text="이메일이 클립보드에 복사되었습니다." />}
        {queryState === 'likeInfoEditSuccess' && (
          <Toast text="취향정보 수정이 완료되었습니다." />
        )}
      </S.Layout>
    </>
  );
}
