import { ComponentWithLayout } from '../sign-up';
import S from '@/style/SplashScreen/style';
import SplashLogo from '@/public/images/SplashLogo.svg';
import { AppLayoutProps } from '@/AppLayout';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getCookie } from '@/utils/Cookie';

const SplashScreen: ComponentWithLayout = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (getCookie('accessToken')) {
        router.push('/main');
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
