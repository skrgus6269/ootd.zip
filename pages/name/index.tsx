import Appbar from '@/components/Appbar';
import { useSNSLogin } from '@/hooks/useSNSLogin';
import { FC, useState } from 'react';
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
import TabView from '@/components/TabView';
import { Sample, Sample1, Sample2 } from '@/components/sample';
import Carousel from '@/components/Carousel';

interface ComponentWithLayout extends FC {
  Layout?: FC<AppLayoutProps>;
}

const Name: ComponentWithLayout = () => {
  const routing = useSNSLogin();

  const login = (platform: string) => {
    routing(platform);
  };

  const [weightDropdown, weightDropdownvalue] = WeightDropdown();
  const [sampleDropdown, sampleDropdownvalue] = SampleDropdown();
  const [switchOn, setSwitchOn] = useState<Boolean>(false);

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
      <TabView>
        <TabView.TabBar tab={['ootd', 'closet', 'favorite']} />
        <TabView.Tabs>
          <TabView.Tab>
            <Sample />
          </TabView.Tab>
          <TabView.Tab>
            <Sample1 />
          </TabView.Tab>
          <TabView.Tab>
            <Sample2 />
          </TabView.Tab>
        </TabView.Tabs>
      </TabView>
      <div style={{ width: '340px', margin: '0 auto' }}>
        <Carousel slidesToShow={2.3} infinite={false}>
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
          <MainTopClothCard
            data={{
              src: 'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
              alt: '카드',
              caption: 'Tag',
            }}
            headline={'Headline4'}
            body={'Body2'}
          />
        </Carousel>
      </div>
      <LikeToggle />
      <SwitchToggle state={switchOn} setState={setSwitchOn} />
      <SearchBar placeholder="Hinted Search Text" />
      <div>
        {weightDropdown} 현재 선택된 value = {weightDropdownvalue}
      </div>
      {sampleDropdown} 현재 선택된 value = {sampleDropdownvalue}
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
