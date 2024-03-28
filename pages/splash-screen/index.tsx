import { ComponentWithLayout } from '../sign-up';
import S from '@/pageStyle/splash-screen/style';
import SplashLogo from '@/public/images/SplashLogo.svg';
import { AppLayoutProps } from '@/AppLayout';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getCookie } from '@/utils/Cookie';
import { PublicApi } from '@/apis/domain/Public/PublicApi';
import { useSetRecoilState } from 'recoil';
import { userId } from '@/utils/recoil/atom';

const SplashScreen: ComponentWithLayout = () => {
  const router = useRouter();
  const { getUserId } = PublicApi();
  const setUserId = useSetRecoilState(userId);

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (getCookie('accessToken')) {
        const { id } = await getUserId();
        router.push('/main');
        setUserId(id);
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
