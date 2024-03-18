import S from '@/pageStyle/main/style';
import AppBar from '@/components/Appbar';
import Headline from '@/components/UI/TypoGraphy/Title1';
import { AiOutlineBell, AiOutlineSearch } from 'react-icons/ai';
import UserCloset from '@/components/Domain/Main/MyCloset';
import TodayRecommend from '@/components/Domain/Main/TodayRecommend';
import SameCloth from '@/components/Domain/Main/SameCloth';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { AlarmApi } from '@/apis/domain/Alarm/AlarmApi';
import Carousel from '@/components/Carousel';
import TabView from '@/components/TabView';
import LikeOOTD from '@/components/Domain/Main/LikeOOTD';

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
  const [isExistNotReadAlarm, setIsExistNotReadAlarm] =
    useState<Boolean>(false);
  const { getExistIsNotReadAlarm } = AlarmApi();

  useEffect(() => {
    const fetchData = async () => {
      const result = await getExistIsNotReadAlarm();
      setIsExistNotReadAlarm(result);
    };
    fetchData();
  }, []);

  return (
    <S.Layout isExistNotReadAlarm={isExistNotReadAlarm}>
      <AppBar
        leftProps={<></>}
        middleProps={<></>}
        rightProps={
          <div className="bell" onClick={() => router.push('/Alarm')}>
            <AiOutlineBell />
          </div>
        }
      />
      <TabView>
        <TabView.TabBar
          display="inline"
          tab={['큐레이팅', '탐색']}
          className="tabBar"
        />
        <TabView.Tabs>
          <TabView.Tab>
            <S.Curation>
              <TodayRecommend data={TodayRecommendSampleData} />
              <LikeOOTD />
              <SameCloth data={SameClothDifferentFeeling} />
              {/* <button onClick={onClickButton}>클릭해봐</button> */}
            </S.Curation>
          </TabView.Tab>
          <TabView.Tab>
            <S.Explore>준비중</S.Explore>
          </TabView.Tab>
        </TabView.Tabs>
      </TabView>
    </S.Layout>
  );
}
