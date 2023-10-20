import AppBar from '@/components/Appbar';
import Headline from '@/components/UI/TypoGraphy/Headline3';
import { AiOutlineClose } from 'react-icons/ai';
import S from './style';
import Body from '@/components/UI/TypoGraphy/Body2';
import { Headline1 } from '@/components/UI';
import { AppLayoutProps } from '@/AppLayout';
import { ComponentWithLayout } from '../sign-up';
import { useSNSLogin } from '@/hooks/useSNSLogin';
import SocialLoginButton from '@/components/SignIn/SocialLoginButton';

const SignIn: ComponentWithLayout = () => {
  const [routing] = useSNSLogin();

  return (
    <S.Layout>
      <AppBar
        leftProps={<AiOutlineClose />}
        middleProps={<Headline>logo</Headline>}
        rightProps={<></>}
      />
      <S.Main>
        <S.Logo>{}</S.Logo>
        <S.Text>
          <Headline1>ootd.zip</Headline1>
          <Body>
            Lorem ipsum dolor sit amet consectetur. Iaculis lorem viverra
            pellentesque etiam.
          </Body>
        </S.Text>
        <S.SocialLoginButton>
          <SocialLoginButton
            platform="kakao"
            onClick={() => routing('kakao')}
          />
          <SocialLoginButton
            platform="apple"
            onClick={() => routing('apple')}
          />
          <SocialLoginButton
            platform="google"
            onClick={() => routing('google')}
          />
        </S.SocialLoginButton>
      </S.Main>
    </S.Layout>
  );
};

export default SignIn;

SignIn.Layout = ({ children }: AppLayoutProps) => {
  return <>{children}</>;
};

SignIn.Layout.displayName = 'SignInLayout';
