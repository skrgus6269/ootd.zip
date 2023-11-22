import { ClothInformationProps } from '@/components/ClothInformation/type';
import UserCloset from '@/components/Main/MyCloset';
import S from './style';
import appleLogo from '@/public/images/appleLogo.png';
import AppBar from '@/components/Appbar';
import Headline from '@/components/UI/TypoGraphy/Headline3';
import { AiOutlineSearch } from 'react-icons/ai';
import TodayRecommend from '@/components/Main/TodayRecommend';
import SameCloth from '@/components/Main/SameCloth';

const ClothInformationSampleData = [
  {
    size: 'big',
    clothImage:
      'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
    caption: 'Tag',
    headline: 'Headline4',
    subHeadline: 'Subtitle3',
    bodyFirst: 'Body4',
    bodySecond: 'Body4',
    icon: 'like',
  },
  {
    size: 'big',
    clothImage:
      'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
    caption: 'Tag',
    headline: 'Headline4',
    subHeadline: 'Subtitle3',
    bodyFirst: 'Body4',
    bodySecond: 'Body4',
    icon: 'like',
  },
  {
    size: 'big',
    clothImage:
      'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
    caption: 'Tag',
    headline: 'Headline4',
    subHeadline: 'Subtitle3',
    bodyFirst: 'Body4',
    bodySecond: 'Body4',
    icon: 'like',
  },
  {
    size: 'big',
    clothImage:
      'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
    caption: 'Tag',
    headline: 'Headline4',
    subHeadline: 'Subtitle3',
    bodyFirst: 'Body4',
    bodySecond: 'Body4',
    icon: 'like',
  },
] as [...ClothInformationProps[]];

const TagClothInformationSampleData = [
  {
    clothImage:
      'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
    headline: 'Headline4',
    bodyFirst: 'body3',
    bodySecond: 'body3',
    state: 'dark',
  },
  {
    clothImage:
      'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
    headline: 'Headline4',
    bodyFirst: 'body3',
    bodySecond: 'body3',
    state: 'dark',
  },
  {
    itemImage:
      'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
    headline: 'Headline4',
    bodyFirst: 'body3',
  },
  {
    clothImage:
      'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
    headline: 'Headline4',
    bodyFirst: 'body3',
    bodySecond: 'body3',
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
      OOTDImage:
        'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
      caption: '옷장',
      headline: '옷과 만난지 n년이 되었어요!',
      subHeadline: '옷의 상태는 어떤가요?',
    },
    {
      OOTDImage:
        'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
      caption: '옷장',
      headline: '옷과 만난지 n년이 되었어요!',
      subHeadline: '옷의 상태는 어떤가요?',
    },
    {
      OOTDImage:
        'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
      caption: '옷장',
      headline: '옷과 만난지 n년이 되었어요!',
      subHeadline: '옷의 상태는 어떤가요?',
    },
    {
      OOTDImage:
        'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
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

const SameClothDifferentFeeling = [
  {
    clothId: 2,
    clothImage:
      'https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_6515b944a6206.jpg',
  },
  {
    clothId: 3,
    clothImage:
      'https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_6515b944a6206.jpg',
  },
  {
    clothId: 4,
    clothImage:
      'https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_6515b944a6206.jpg',
  },
  {
    clothId: 5,
    clothImage:
      'https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_6515b944a6206.jpg',
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
        <SameCloth />
        {/* <button onClick={onClickButton}>클릭해봐</button> */}
      </S.Layout>
    </>
  );
}
