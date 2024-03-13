import AppBar from '@/components/Appbar';
import S from '@/style/mypage/style';
import {
  AiOutlineArrowLeft,
  AiOutlineEllipsis,
  AiOutlineSetting,
} from 'react-icons/ai';
import { useRouter } from 'next/router';
import Profile from '@/components/Domain/MyPage/Profile';
import Closet from '@/components/Domain/MyPage/Closet';
import { useState, useEffect } from 'react';
import Toast from '@/components/Toast';
import { userId } from '@/utils/recoil/atom';
import { useRecoilValue } from 'recoil';
import { UserApi } from '@/apis/domain/User/UserApi';
import { UserProfileDataType } from '@/components/Domain/MyPage/Profile';
import BlockAlert from '@/components/Domain/MyPage/BlockAlert';

export default function MyPage() {
  const router = useRouter();
  const path = router.asPath;
  const [showingId, setShowingId] = useState<number>(1);
  const [queryState, setQueryState] = useState<string>('');
  const localUserId = useRecoilValue(userId);

  const [userProfileData, setUserProfileData] = useState<UserProfileDataType>({
    userImage:
      'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
    userName: '낙낙',
    followerCount: 72,
    followingCount: 132,
    height: 177,
    weight: 72,
    followingState: false,
    description: '간계밥',
    OOTDNumber: 0,
    clothNumber: 0,
  });

  const { getMypage } = UserApi();

  useEffect(() => {
    const ferchData = async () => {
      const result = await getMypage(showingId);
      setUserProfileData(result);
    };

    ferchData();
  });

  useEffect(() => {
    if (router.query.state !== '') {
      setQueryState(router.query.state as string);
    }
  }, []);

  const [blockOpen, setBlockOpen] = useState<Boolean>(false);
  const onClickBackground = () => {
    if (blockOpen) setBlockOpen(false);
  };

  const onClickYesButton = async () => {
    console.log(11122);
  };

  const onClickNoButton = () => {
    console.log('no');
  };

  return (
    <>
      <S.Layout>
        <AppBar
          leftProps={
            <AiOutlineArrowLeft
              onClick={() => router.back()}
              className="arrowleft"
            />
          }
          middleProps={<></>}
          rightProps={
            localUserId === showingId ? (
              <AiOutlineSetting
                className="setting"
                onClick={() => router.push('/Setting')}
              />
            ) : (
              <AiOutlineEllipsis onClick={() => setBlockOpen(true)} />
            )
          }
        />
        <S.Background isOpen={blockOpen} onClick={onClickBackground} />
        <Profile
          data={userProfileData}
          localUserId={localUserId}
          showingId={showingId}
        />
        <Closet localUserId={localUserId} showingId={showingId} />
        {queryState === 'editSuccess' && (
          <Toast text="프로필이 수정되었습니다." />
        )}
        {blockOpen && (
          <BlockAlert
            blockUserName={userProfileData.userName}
            onClickYesButton={onClickYesButton}
            onClickNoButton={onClickNoButton}
          />
        )}
      </S.Layout>
    </>
  );
}
