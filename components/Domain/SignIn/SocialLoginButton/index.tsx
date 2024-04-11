/* eslint-disable react/jsx-key */
import S from './style';
import { Button3 } from '@/components/UI';
import KakaoLogo from '@/public/images/kakaoLogos.svg';
import AppleLogo from '@/public/images/appleLogos.svg';

interface SocialLoginButtonProps {
  onClick: () => void;
  platform: 'KAKAO' | 'GOOGLE' | 'APPLE';
}

export default function SocialLoginButton({
  onClick,
  platform,
}: SocialLoginButtonProps) {
  const platformInfo = {
    KAKAO: [<KakaoLogo />, '카카오로 로그인'],
    APPLE: [<AppleLogo />, '애플로 로그인'],
    GOOGLE: [<AppleLogo />, 'Google 계정으로 로그인'],
  };

  return (
    <S.Layout>
      <S.Button onClick={onClick}>
        <S.ButtonString platform={platform}>
          {platformInfo[platform][0]}
          <Button3>
            <>{platformInfo[platform][1]}</>
          </Button3>
        </S.ButtonString>
      </S.Button>
    </S.Layout>
  );
}
