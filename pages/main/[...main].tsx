import S from '@/pageStyle/main/style';
import AppBar from '@/components/Appbar';
import { AiOutlineBell, AiOutlineSearch } from 'react-icons/ai';
import SameCloth from '@/components/Domain/Main/SameCloth';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { AlarmApi } from '@/apis/domain/Alarm/AlarmApi';
import TabView from '@/components/TabView';
import LikeOOTD from '@/components/Domain/Main/LikeOOTD';
import Explore from '@/components/Domain/Main/Explore';
import Toast from '@/components/Toast';

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

  const [notOpenState, setNotOpenState] = useState<Boolean>(false);
  const [goToMypageAlertState, setGoToMypageAlertState] =
    useState<Boolean>(false);

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
      {router.isReady && (
        <TabView initialIndex={router.query.main![0] === 'explore' ? 2 : 1}>
          <TabView.TabBar
            display="inline"
            tab={['큐레이팅', '탐색']}
            className="tabBar"
          />
          <TabView.Tabs>
            <TabView.Tab>
              <S.Curation>
                <LikeOOTD />
                <SameCloth />
              </S.Curation>
            </TabView.Tab>
            <TabView.Tab>
              <S.Explore>
                <Explore />
              </S.Explore>
            </TabView.Tab>
          </TabView.Tabs>
        </TabView>
      )}
      {notOpenState && (
        <Toast
          className="toast"
          text="공개로 설정된 옷만 태그할 수 있어요."
          state={notOpenState}
          setState={setNotOpenState}
          actionText="옷장으로 이동"
          actionFunction={() => setGoToMypageAlertState(true)}
          isHelperText={true}
        />
      )}
    </S.Layout>
  );
}
