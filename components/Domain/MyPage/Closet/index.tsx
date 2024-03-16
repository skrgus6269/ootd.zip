import { useFunnel } from '@/hooks/use-funnel';
import S from './style';
import ClosetTabbar from './ClosetTabbar';
import ClosetCloth from './ClosetCloth';
import ClosetOOTD, { MyPageOOTDType } from './ClosetOOTD';
import { useEffect, useState } from 'react';
import { OOTDApi } from '@/apis/domain/OOTD/OOTDApi';
import { useRecoilValue } from 'recoil';
import { userId } from '@/utils/recoil/atom';

interface ClosetType {
  localUserId: number;
  showingId: number | undefined;
}

export default function Closet({ localUserId, showingId }: ClosetType) {
  const [Funnel, currentStep, handleStep] = useFunnel(['OOTD', 'Cloth']);
  const myId = useRecoilValue(userId);
  const { getOOTD } = OOTDApi();
  // const [getCloth] = useClogth();

  // const myPageClothList = getCloth({ id: 0 });

  useEffect(() => {
    const fetchData = async () => {
      const { content } = await getOOTD(myId);
      setMyPageOOTDList(
        content.map((item: any) => {
          return { ootdId: item.id, ootdImage: item.image };
        })
      );
    };
    fetchData();
  }, []);

  const [myPageOOTDList, setMyPageOOTDList] = useState<MyPageOOTDType[]>([]);

  const myPageClothList = [
    {
      clothId: 0,
      clothImage:
        'https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_6515b944a6206.jpg',
    },
    {
      clothId: 1,
      clothImage:
        'https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_6515b944a6206.jpg',
    },
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
    {
      clothId: 5,
      clothImage:
        'https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_6515b944a6206.jpg',
    },
    {
      clothId: 5,
      clothImage:
        'https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_6515b944a6206.jpg',
    },
    {
      clothId: 5,
      clothImage:
        'https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_6515b944a6206.jpg',
    },
    {
      clothId: 5,
      clothImage:
        'https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_6515b944a6206.jpg',
    },
  ];

  return (
    <>
      <S.Layout>
        <ClosetTabbar
          OOTDNumber={myPageOOTDList ? myPageOOTDList.length : 0}
          clothNumber={myPageClothList ? myPageClothList.length : 0}
          handleStep={handleStep}
          currentStep={currentStep}
        />
        <Funnel>
          <Funnel.Steps name="OOTD">
            <ClosetOOTD myPageOOTDList={myPageOOTDList} />
          </Funnel.Steps>
          <Funnel.Steps name="Cloth">
            <ClosetCloth myPageClothList={myPageClothList} />
          </Funnel.Steps>
        </Funnel>
      </S.Layout>
    </>
  );
}
