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
import { MyProfile, OtherProfile } from '@/components/Profile';
import useIsUser from '@/hooks/useIsUser';
import nakhyeon from 'public/images/증명사진.jpg';
import { Sample, Sample1, Sample2 } from '@/components/sample';
import Input from '@/components/Input';
import IdInput from '@/components/SignUp/IdInput';
import BodyInput from '@/components/SignUp/BodyInput';
import TrueFalse from '@/components/Input/TrueFalse';
import WeightOpen from '@/components/SignUp/WeightOpen';

interface ComponentWithLayout extends FC {
  Layout?: FC<AppLayoutProps>;
}

const Name: ComponentWithLayout = () => {
  const routing = useSNSLogin();

  const login = (platform: string) => {
    routing(platform);
  };

  const [switchOn, setSwitchOn] = useState<Boolean>(false);
  const [isUser, setIsUser] = useIsUser();

  const options = [
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4',
    'Option 5',
    'Option 6',
    'Option 7',
  ];

  const [nowOption, setNowOption] = useState('Option1');
  const [idInput, setIdInput] = useState<string>();
  const [bodyInput, setBodyInput] = useState<string>();
  const [open, setOpen] = useState<Boolean>(true);

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
      {/* <IdInput setInput={setIdInput} />
      <BodyInput setInput={setBodyInput} /> */}
      <WeightOpen state={open} setState={setOpen} />
      <MyProfile isUser={false} />
      <MyProfile
        isUser={true}
        userName="낙현"
        follow="123"
        myCloth="12"
        userImage={nakhyeon}
      />
      <OtherProfile
        isUser={true}
        userName="바름"
        follow="123"
        myCloth="12"
        userImage={nakhyeon}
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
      <LikeToggle />
      <SwitchToggle state={switchOn} setState={setSwitchOn} />
      {nowOption}
      <SampleDropdown options={options} setNowOption={setNowOption} />
      <SearchBar placeholder="Hinted Search Text" />
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
