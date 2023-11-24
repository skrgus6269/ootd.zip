import S from './style';
import { Button1 } from '@/components/UI';
import kakaoLogo from '@/public/images/kakaoLogo.png';
import appleLogo from '@/public/images/appleLogo.png';
import googleLogo from '@/public/images/googleLogo.png';
import Image from 'next/image';

interface SocialLoginButtonProps {
  onClick: () => void;
  platform: 'KAKAO' | 'GOOGLE' | 'APPLE';
}

export default function SocialLoginButton({
  onClick,
  platform,
}: SocialLoginButtonProps) {
  const platformInfo = {
    KAKAO: [kakaoLogo, '카카오로 로그인'],
    APPLE: [appleLogo, '애플로 로그인'],
    GOOGLE: [googleLogo, 'Google 계정으로 로그인'],
  };

  return (
    <S.Layout>
      <S.Button onClick={onClick}>
        <S.ButtonString platform={platform}>
          <Image src={platformInfo[platform][0]} alt={`${platform}logo`} />
          <Button1>
            <>{platformInfo[platform][1]}</>
          </Button1>
        </S.ButtonString>
      </S.Button>
    </S.Layout>
  );
}
