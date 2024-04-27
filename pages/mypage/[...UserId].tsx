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
import { UserApi } from '@/apis/domain/User/UserApi';
import { UserProfileDataType } from '@/components/Domain/MyPage/Profile';
import { PublicApi } from '@/apis/domain/Public/PublicApi';
import OtherModal from '@/components/Domain/MyPage/OtherModal';

export default function MyPage() {
  const router = useRouter();

  const [queryState, setQueryState] = useState<string>('');

  const [userProfileData, setUserProfileData] = useState<UserProfileDataType>({
    userId: 0,
    profileImage:
      'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
    userName: '',
    followerCount: 0,
    followingCount: 0,
    height: 0,
    weight: 0,
    isFollow: false,
    isMyProfile: false,
    description: '',
    ootdCount: 0,
    clothesCount: 0,
  });

  const { getMypage } = UserApi();
  const { follow, unFollow } = PublicApi();

  useEffect(() => {
    const ferchData = async () => {
      if (!router.isReady) return;
      try {
        const result = await getMypage(Number(router.query.UserId![0]));
        setUserProfileData(result);
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
            userProfileData.isMyProfile ? (
              <AiOutlineSetting
                className="setting"
                onClick={() => router.push('/settings')}
              />
            ) : (
              <>
                {/* <AiOutlineEllipsis onClick={() => setBlockOpen(true)} /> */}
              </>
            )
          }
        />
        <S.Background isOpen={blockOpen} onClick={onClickBackground} />
        <Profile
          data={userProfileData}
          onClickFollowButton={onClickFollowButton}
        />
        <Closet
          showingId={userProfileData.userId}
          userName={userProfileData.userName}
          ootdCount={userProfileData.ootdCount}
          clothesCount={userProfileData.clothesCount}
          isMyProfile={userProfileData.isMyProfile}
        />
        {queryState === 'editSuccess' && (
          <Toast text="프로필이 수정되었습니다." />
        )}

        {blockOpen && (
          <OtherModal
            blockUserName={userProfileData.userName}
            onClickNoButton={onClickNoButton}
            onClickYesButton={onClickYesButton}
          />
        )}
      </S.Layout>
    </>
  );
}
