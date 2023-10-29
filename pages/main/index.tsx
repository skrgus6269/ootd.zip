import ClothInformation from '@/components/ClothInformation';
import TagInformation from '@/components/ClothInformation/TagInformation';
import { ClothInformationProps } from '@/components/ClothInformation/type';
import UserCloset from '@/components/Main/MyCloset';
import S from './style';
import appleLogo from '@/public/images/appleLogo.png';
import Jae from '@/public/images/권재형.jpg';
import Kim from '@/public/images/김주엽.jpg';
import Park from '@/public/images/박윤욱.jpg';
import Son from '@/public/images/손정민.jpg';
import OOTD1 from '@/public/images/권낙현.jpg';
import OOTD2 from '@/public/images/권낙현2.jpg';
import OOTD3 from '@/public/images/권낙현3.jpg';
import AppBar from '@/components/Appbar';
import Headline from '@/components/UI/TypoGraphy/Headline3';
import { AiOutlineSearch } from 'react-icons/ai';
import TodayRecommend from '@/components/Main/TodayRecommend';

const ClothInformationSampleData = [
  {
    size: 'big',
    itemImage:
      'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
    caption: 'Tag',
    Headline: 'Headline4',
    SubHeadline: 'Subtitle3',
    BodyFirst: 'Body4',
    BodySecond: 'Body4',
    icon: 'like',
  },
  {
    size: 'big',
    itemImage:
      'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
    caption: 'Tag',
    Headline: 'Headline4',
    SubHeadline: 'Subtitle3',
    BodyFirst: 'Body4',
    BodySecond: 'Body4',
    icon: 'like',
  },
  {
    size: 'small',
    itemImage:
      'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
    caption: 'Tag',
    Headline: 'Headline4',
    SubHeadline: 'Subtitle3',
    BodyFirst: 'Body4',
    BodySecond: 'Body4',
    icon: 'like',
  },
  {
    size: 'big',
    itemImage:
      'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
    caption: 'Tag',
    Headline: 'Headline4',
    SubHeadline: 'Subtitle3',
    BodyFirst: 'Body4',
    BodySecond: 'Body4',
    icon: 'bell',
  },
] as [...ClothInformationProps[]];

const TagClothInformationSampleData = [
  {
    itemImage:
      'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
    Headline: 'Headline4',
    BodyFirst: 'body3',
    state: 'light',
  },
  {
    itemImage:
      'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
    Headline: 'Headline4',
    BodyFirst: 'body3',
    BodySecond: 'body3',
    state: 'light',
  },
  {
    itemImage:
      'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
    Headline: 'Headline4',
    BodyFirst: 'body3',
    state: 'dark',
  },
  {
    itemImage:
      'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
    Headline: 'Headline4',
    BodyFirst: 'body3',
    BodySecond: 'body3',
    state: 'dark',
  },
] as [...ClothInformationProps[]];

const MyClosetDataSample = {
  user: {
    userImage: appleLogo,
    userName: 'username',
    follow: 999,
    myCloth: 999,
  },
  data: [
    {
      OOTDImage: OOTD1,
      caption: '옷장',
      headline: '옷과 만난지 n년이 되었어요!',
      subHeadline: '옷의 상태는 어떤가요?',
    },
    {
      OOTDImage: OOTD2,
      caption: '옷장',
      headline: '옷과 만난지 n년이 되었어요!',
      subHeadline: '옷의 상태는 어떤가요?',
    },
    {
      OOTDImage: OOTD3,
      caption: '옷장',
      headline: '옷과 만난지 n년이 되었어요!',
      subHeadline: '옷의 상태는 어떤가요?',
    },
    {
      OOTDImage: OOTD1,
      caption: '옷장',
      headline: '옷과 만난지 n년이 되었어요!',
      subHeadline: '옷의 상태는 어떤가요?',
    },
  ],
};

const TodayRecommendSampleData = [
  {
    ootdImage:
      'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
    item: [
      {
        itemImage:
          'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
        caption: '태그',
        brand: 'Nike',
        category: '반소매',
        name: 'Nike half sleeve logo T-shirt',
        size: 'Size L',
      },
      {
        itemImage:
          'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
        caption: '비슷한',
        brand: 'Ader error',
        category: '반소매',
        name: 'Graphic half sleeve T-shirt',
        size: 'Size XL',
      },
    ],
  },
  {
    ootdImage:
      'https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_6515b944a6206.jpg',
    item: [
      {
        itemImage:
          'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
        caption: '태그',
        brand: 'Nike',
        category: 'Top',
        name: '나이키 상의',
        size: 'Body4',
        icon: 'like',
      },
      {
        itemImage:
          'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
        caption: '비슷한',
        brand: 'Nike',
        category: 'Top',
        name: 'Body4',
        size: 'Body4',
        icon: 'like',
      },
    ],
  },
];

export default function Main() {
  return (
    <>
      <AppBar
        leftProps={<></>}
        middleProps={<Headline>logo</Headline>}
        rightProps={<AiOutlineSearch />}
      />
      <S.Layout>
        <UserCloset isUser={true} userOOTD={MyClosetDataSample} />
        <TodayRecommend data={TodayRecommendSampleData} />
      </S.Layout>
    </>
  );
}
