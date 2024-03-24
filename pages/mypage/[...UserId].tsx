import AppBar from '@/components/Appbar';
import S from '@/pageStyle/mypage/style';
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
import { PublicApi } from '@/apis/domain/Public/PublicApi';

export default function MyPage() {
  const router = useRouter();

  const [showingId, setShowingId] = useState<number>(0);

  const [queryState, setQueryState] = useState<string>('');
  const localUserId = useRecoilValue(userId);

  const [userProfileData, setUserProfileData] = useState<UserProfileDataType>({
    userId: 1,
    userImage:
      'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
    userName: '낙낙',
    followerCount: 72,
    followingCount: 132,
    height: 177,
    weight: 72,
    isFollow: false,
    description: '간계밥',
    ootdCount: 0,
    clothesCount: 0,
  });

  const [followState, setFollowState] = useState<Boolean>(false);

  const { getMypage } = UserApi();
  const { follow, unFollow } = PublicApi();

  useEffect(() => {
    const ferchData = async () => {
      if (!router.isReady) return;
      try {
        const result = await getMypage(Number(router.query.UserId![0]));
        setUserProfileData(result);
        setShowingId(Number(router.query.UserId![0]));
      } catch (err) {
        console.log(err);
      }
    };

    ferchData();
  }, [router.isReady, router.query.userId]);

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
    setBlockOpen(false);
  };

  const onClickFollowButton = async () => {
    if (!userProfileData.isFollow) {
      await follow(userProfileData.userId);
      const result = await getMypage(Number(router.query.UserId![0]));
      setUserProfileData(result);
    }
    if (userProfileData.isFollow) {
      await unFollow(userProfileData.userId);
      const result = await getMypage(Number(router.query.UserId![0]));
      setUserProfileData(result);
    }
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
                onClick={() => router.push('/settings')}
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
          onClickFollowButton={onClickFollowButton}
        />
        <Closet
          showingId={showingId}
          ootdCount={userProfileData.ootdCount}
          clothesCount={userProfileData.clothesCount}
        />
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
