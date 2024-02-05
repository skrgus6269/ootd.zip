import { useFunnel } from '@/hooks/use-funnel';
import S from './style';
import ClosetTabbar from './ClosetTabbar';
import ClosetCloth from './ClosetCloth';
import ClosetOOTD from './ClosetOOTD';

export default function Closet() {
  const [Funnel, currentStep, handleStep] = useFunnel(['OOTD', 'Cloth']);

  // const [, getOOTD] = useOOTD();
  // const [getCloth] = useClogth();

  // const myPageOOTDList = getOOTD({ id: 0 });
  // const myPageClothList = getCloth({ id: 0 });

  const myPageOOTDList = [
    {
      ootdId: 0,
      ootdImage:
        'https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_6515b944a6206.jpg',
    },
    {
      ootdId: 1,
      ootdImage:
        'https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_6515b944a6206.jpg',
    },
    {
      ootdId: 2,
      ootdImage:
        'https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_6515b944a6206.jpg',
    },
    {
      ootdId: 3,
      ootdImage:
        'https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_6515b944a6206.jpg',
    },
    {
      ootdId: 4,
      ootdImage:
        'https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_6515b944a6206.jpg',
    },
    {
      ootdId: 5,
      ootdImage:
        'https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_6515b944a6206.jpg',
    },
    {
      ootdId: 5,
      ootdImage:
        'https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_6515b944a6206.jpg',
    },
    {
      ootdId: 5,
      ootdImage:
        'https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_6515b944a6206.jpg',
    },
    {
      ootdId: 5,
      ootdImage:
        'https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_6515b944a6206.jpg',
    },
    {
      ootdId: 5,
      ootdImage:
        'https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_6515b944a6206.jpg',
    },
  ];

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