import { ComponentWithLayout } from '../sign-up';
import S from '@/pageStyle/splash-screen/style';
import SplashLogo from '@/public/images/SplashLogo.svg';
import { AppLayoutProps } from '@/AppLayout';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { PublicApi } from '@/apis/domain/Public/PublicApi';
import { useSetRecoilState } from 'recoil';
import { userId } from '@/utils/recoil/atom';
import { getReactNativeMessage } from '@/utils/reactNativeMessage';
import { RegisterApi } from '@/apis/domain/Register/RegisterApi';

const SplashScreen: ComponentWithLayout = () => {
  const router = useRouter();
  const { getUserId } = PublicApi();
  const setUserId = useSetRecoilState(userId);
  const [_state, setState] = useState();
  const { getCheckCompleteRegistUserInfo } = RegisterApi();

  useEffect(() => {
    const timer = setTimeout(async () => {
      getReactNativeMessage(setState);
      if (localStorage.getItem('accessToken')) {
        const result = await getUserId();
        if (await getCheckCompleteRegistUserInfo()) {
          router.push('/main');
          setUserId(result);
          return;
        }
        router.replace('/sign-up');
        return;
      }
      router.push('/onboarding');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <S.Layout>
      <SplashLogo className="splashLogo" />
    </S.Layout>
  );
};

export default SplashScreen;

SplashScreen.Layout = ({ children }: AppLayoutProps) => {
  return <>{children}</>;
};

SplashScreen.Layout.displayName = 'SplashScreenLayout';
