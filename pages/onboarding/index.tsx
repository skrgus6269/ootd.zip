/* eslint-disable @next/next/no-img-element */
import { AppLayoutProps } from '@/AppLayout';
import { ComponentWithLayout } from '../sign-up';
import S from './style';
import { Body2, Headline1 } from '@/components/UI';
import Button from '@/components/Button';
import { useRouter } from 'next/router';

const Onboarding: ComponentWithLayout = () => {
  const router = useRouter();

  return (
    <S.Layout>
      <img
        src="https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg"
        alt=""
      />
      <S.TypoGraphy>
        <Headline1>내 손안의 옷장</Headline1>
        <Body2>
          Lorem ipsum dolor sit amet consectetur. Iaculis lorem viverra
          pellentesque etiam
        </Body2>
      </S.TypoGraphy>
      <S.ButtonGroup>
        <Button
          onClick={() => router.push('/AddCloth')}
          size="big"
          backgroundColor="grey_00"
          color="grey_100"
          border={true}
        >
          가입하기
        </Button>
        <Button
          onClick={() => router.push('/AddOOTD')}
          size="big"
          backgroundColor="grey_100"
          color="grey_00"
          border={true}
        >
          둘러보기
        </Button>
      </S.ButtonGroup>
    </S.Layout>
  );
};
export default Onboarding;

Onboarding.Layout = ({ children }: AppLayoutProps) => {
  return <>{children}</>;
};

Onboarding.Layout.displayName = 'OnbardingLayout';
