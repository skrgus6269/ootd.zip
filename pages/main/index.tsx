import S from '@/style/main/style';
import AppBar from '@/components/Appbar';
import Headline from '@/components/UI/TypoGraphy/Title1';
import { AiOutlineBell, AiOutlineSearch } from 'react-icons/ai';
import UserCloset from '@/components/Domain/Main/MyCloset';
import TodayRecommend from '@/components/Domain/Main/TodayRecommend';
import SameCloth from '@/components/Domain/Main/SameCloth';
import { useRouter } from 'next/router';

const MyClosetDataSample = {
  user: {
    userImage:
      'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
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
        clothId: 0,
        itemImage:
          'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
        caption: '태그',
        brand: 'Nike',
        category: '반소매',
        name: 'Nike half sleeve logo T-shirt',
        size: 'Size L',
      },
      {
        clothId: 1,
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
        clothId: 1,
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
        clothId: 1,
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
    clothid: 0,
    image:
      'https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_6515b944a6206.jpg',
    category: '카테고리',
    name: '제품명',
  },
  {
    clothid: 0,
    image:
      'https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_6515b944a6206.jpg',
    category: '카테고리',
    name: '제품명',
  },
  {
    clothid: 0,
    image:
      'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
    category: '카테고리',
    name: '제품명',
  },
  {
    clothid: 0,
    image:
      'https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_6515b944a6206.jpg',
    category: '카테고리',
    name: '제품명',
  },
  {
    clothid: 0,
    image:
      'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
    category: '카테고리',
    name: '제품명',
  },
  {
    clothid: 0,
    image:
      'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
    category: '카테고리',
    name: '제품명',
  },
  {
    clothid: 0,
    image:
      'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
    category: '카테고리',
    name: '제품명',
  },
  {
    clothid: 0,
    image:
      'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
    category: '카테고리',
    name: '제품명',
  },
];

export default function Main() {
  const router = useRouter();
  return (
    <S.Layout>
      <AppBar
        leftProps={<></>}
        middleProps={<Headline>logo</Headline>}
        rightProps={
          <div className="bell" onClick={() => router.push('/Alarm')}>
            <AiOutlineBell />
          </div>
        }
      />
      <S.Main>
        <TodayRecommend data={TodayRecommendSampleData} />
        <SameCloth data={SameClothDifferentFeeling} />
        {/* <button onClick={onClickButton}>클릭해봐</button> */}
      </S.Main>
    </S.Layout>
  );
}
