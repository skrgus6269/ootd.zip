import S from './style';
import { Button1 } from '@/components/UI';
import kakaoLogo from '@/public/images/kakaoLogo.png';
import appleLogo from '@/public/images/appleLogo.png';
import googleLogo from '@/public/images/googleLogo.png';
import Image from 'next/image';

interface SocialLoginButtonProps {
  onClick: () => void;
  platform: 'kakao' | 'google' | 'apple';
}

export default function SocialLoginButton({
  onClick,
  platform,
}: SocialLoginButtonProps) {
  const platformInfo = {
    kakao: [kakaoLogo, '카카오로 로그인'],
    apple: [appleLogo, '애플로 로그인'],
    google: [googleLogo, 'Google 계정으로 로그인'],
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
