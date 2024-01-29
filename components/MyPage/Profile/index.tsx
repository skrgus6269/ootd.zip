import { OtherProfile } from '@/components/Profile';
import S from './style';
import Button from '@/components/Button';
import { Body3, Body4, Button3 } from '@/components/UI';
import { useState } from 'react';

interface UserProfileDataType {
  userImage: string;
  userName: string;
  follower: number;
  following: number;
  height: number;
  weight: number;
  followingState: Boolean;
  introduce: string;
  OOTDNumber: number;
  clothNumber: number;
}

export default function Profile() {
  const onClickFollowButton = () => {};

  // const [getMypageProfileData] = useCloset();

  const [userProfileData, setUserProfileData] = useState<UserProfileDataType>({
    userImage:
      'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
    userName: '낙낙',
    follower: 72,
    following: 132,
    height: 177,
    weight: 72,
    followingState: false,
    introduce: '간계밥',
    OOTDNumber: 0,
    clothNumber: 0,
  });

  return (
    <S.Layout>
      <OtherProfile
        className="profile"
        userImage={userProfileData.userImage}
        userName={userProfileData.userName}
        isUser={true}
        follow={userProfileData.follower}
        myCloth={userProfileData.following}
      />
      <S.BodyInformation>
        <Body4>{userProfileData.height}cm</Body4>
        <p className="dot">•</p>
        <Body4>{userProfileData.weight}kg</Body4>
      </S.BodyInformation>
      <S.Introduce>
        <Body3>{userProfileData.introduce}</Body3>
      </S.Introduce>
      <Button
        className="followButton"
        size="big"
        backgroundColor="grey_00"
        color="grey_100"
        border={false}
        onClick={onClickFollowButton}
      >
        <Button3>팔로우</Button3>
      </Button>
    </S.Layout>
  );
}
