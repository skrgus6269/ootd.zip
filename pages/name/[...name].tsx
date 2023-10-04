import Appbar from '@/components/Appbar';
import { useSNSLogin } from '@/hooks/useSNSLogin';
import { FC, useEffect, useState } from 'react';
import { AppLayoutProps } from '../../AppLayout';
import MainTopClothCard from '@/components/Card/MainTopUserCard';
import MainFavoriteCard from '@/components/Card/MainFavoriteCard';
import {
  AiOutlineArrowLeft,
  AiOutlineCheck,
  AiOutlineUpload,
  AiOutlineSetting,
  AiFillGithub,
} from 'react-icons/ai';
import Button from '@/components/Button';
import { WeightDropdown, SampleDropdown } from '@/components/Dropdown';
import SearchBar from '@/components/SearchBar';
import SwitchToggle from '@/components/Toggle/SwitchToggle';
import LikeToggle from '@/components/Toggle/LikeToggle';
import Tabs from '@/components/Tabs';

interface ComponentWithLayout extends FC {
  Layout?: FC<AppLayoutProps>;
}

const Name: ComponentWithLayout = () => {
  const routing = useSNSLogin();

  const login = (platform: string) => {
    routing(platform);
  };

  const [switchOn, setSwitchOn] = useState<Boolean>(false);

  const options = [
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4',
    'Option 5',
    'Option 6',
    'Option 7',
  ];

  const [nowOption, setNowOption] = useState('Option 1');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
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
      <Tabs tab={['ootd', 'closet', 'favorite']}>
        <Tabs.TabBar tab={['ootd', 'closet', 'favorite']} />
        <Tabs.Tab name="ootd">
          <div>ootd</div>
        </Tabs.Tab>
        <Tabs.Tab name="closet">
          <div>closet</div>
        </Tabs.Tab>
        <Tabs.Tab name="favorite">
          <div>favorite</div>
        </Tabs.Tab>
      </Tabs>
      <LikeToggle />
      <SwitchToggle state={switchOn} setState={setSwitchOn} />
      <SearchBar placeholder="Hinted Search Text" />
      {nowOption}
      <SampleDropdown options={options} setNowOption={setNowOption} />
      <Button
        backgroundColor="grey_00"
        size="lg"
        color="grey_100"
        border={false}
        onClick={() => console.log('a')}
      >
        Button3
      </Button>
      <Button
        backgroundColor="grey_90"
        size="lg"
        color="grey_100"
        border={false}
        onClick={() => console.log('a')}
      >
        Button3
      </Button>
      <Button
        backgroundColor="grey_100"
        size="lg"
        color="grey_00"
        border={true}
        onClick={() => console.log('a')}
      >
        Button3
      </Button>
      <Button
        backgroundColor="grey_90"
        size="sm"
        color="grey_00"
        border={false}
        onClick={() => console.log('a')}
      >
        Button
      </Button>
      <Button
        backgroundColor="grey_00"
        size="sm"
        color="grey_100"
        border={false}
        onClick={() => console.log('a')}
      >
        Button
      </Button>
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
