import Appbar from '@/components/Appbar';
import { useSNSLogin } from '@/hooks/useSNSLogin';
import { FC } from 'react';
import { AppLayoutProps } from '../AppLayout';
import MainTopClothCard from '@/components/Card/MainTopUserCard';
import MainFavoriteCard from '@/components/Card/MainFavoriteCard';
import {
  AiOutlineArrowLeft,
  AiOutlineCheck,
  AiOutlineUpload,
  AiOutlineSetting,
  AiFillGithub,
} from 'react-icons/ai';

interface ComponentWithLayout extends FC {
  Layout?: FC<AppLayoutProps>;
}

const Name: ComponentWithLayout = () => {
  const routing = useSNSLogin();

  const login = (platform: string) => {
    routing(platform);
  };

  return (
    <div>
      <Appbar
        leftProps={
          <>
            <AiOutlineArrowLeft />
          </>
        }
        middleProps={<AiFillGithub />}
        rightProps={
          <>
            <AiOutlineSetting />
            <AiOutlineUpload />
            <AiOutlineCheck />
          </>
        }
      />
      <button onClick={() => login('google')}>로그인</button>
      <MainTopClothCard
        data={{
          src: 'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
          alt: '카드',
          caption: 'Tag',
        }}
        headline={'Headline4'}
        body={'Body2'}
      />
      <MainTopClothCard
        data={{
          src: 'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
          alt: '카드',
          caption: 'Tag',
        }}
        headline={'Headline4'}
        body={'Body2'}
      />
      <MainFavoriteCard
        data={{
          src: 'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
          alt: '카드',
          caption: '',
        }}
        callout={'2000/00/00'}
      />
      <MainFavoriteCard
        data={{
          src: 'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
          alt: '카드',
          caption: '',
        }}
        callout={'2000/00/00'}
      />
    </div>
  );
};

// Name.Layout = ({ children }: BottomNavBarProps) => {
//   return <div>{children}</div>;
// };

// Name.Layout.displayName = 'NameLayout';

export default Name;
