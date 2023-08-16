import {
  Headline1,
  Headline2,
  Subheadline1,
  Subheadline2,
  Subheadline3,
  Callout1,
  Callout2,
  Callout3,
  Callout4,
  Title1,
  Title2,
  Title3,
  Title4,
  Body1,
  Body2,
  Label1,
  Label2,
} from '@/components/UI';

import { useSNSLogin } from '@/hooks/useSNSLogin';
import { FC, ReactNode } from 'react';

interface ComponentWithLayout extends FC {
  Layout?: FC<BottomNavBarProps>;
}

interface BottomNavBarProps {
  children: ReactNode;
}

const Name: ComponentWithLayout = () => {
  const routing = useSNSLogin();

  const login = (platform: string) => {
    routing(platform);
  };

  return (
    <div>
      <Headline1>Headline1</Headline1>
      <Headline2>Headline2</Headline2>
      <Subheadline1>Subheadline1</Subheadline1>
      <Subheadline2>Subheadline2</Subheadline2>
      <Subheadline3>Subheadline3</Subheadline3>
      <Callout1>Callout1</Callout1>
      <Callout2>Callout2</Callout2>
      <Callout3>Callout3</Callout3>
      <Callout4>Callout4</Callout4>
      <Title1>Title1</Title1>
      <Title2>Title2</Title2>
      <Title3>Title3</Title3>
      <Title4>Title4</Title4>
      <Body1>Body1</Body1>
      <Body2>Body2</Body2>
      <Label1>Label1</Label1>
      <Label2>Label2</Label2>
      <button onClick={() => login('google')}>로그인</button>
    </div>
  );
};

// Name.Layout = ({ children }: BottomNavBarProps) => {
//   return <div>{children}</div>;
// };

// Name.Layout.displayName = 'NameLayout';

export default Name;
