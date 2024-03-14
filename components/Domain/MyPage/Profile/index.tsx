import { OtherProfile } from '@/components/Profile';
import S from './style';
import Button from '@/components/Button';
import { Body3, Body4, Button3 } from '@/components/UI';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export interface UserProfileDataType {
  userImage: string;
  userName: string;
  followerCount: number;
  followingCount: number;
  height: number;
  weight: number;
  followingState: Boolean;
  description: string;
  OOTDNumber: number;
  clothNumber: number;
}

interface profileProps {
  data: UserProfileDataType;
  localUserId: number;
  showingId: number | undefined;
}

export default function Profile({
  data,
  localUserId,
  showingId,
}: profileProps) {
  const onClickFollowButton = () => {};
  const router = useRouter();

  return (
    <S.Layout>
      <OtherProfile
        className="profile"
        userImage={data.userImage}
        userName={data.userName}
        isUser={true}
        follow={data.followerCount}
        myCloth={data.followingCount}
      />
      <S.BodyInformation>
        <Body4>{data.height}cm</Body4>
        <p className="dot">•</p>
        <Body4>{data.weight}kg</Body4>
      </S.BodyInformation>
      <S.Introduce>
        <Body3>{data.description}</Body3>
      </S.Introduce>
      <Button
        className="followButton"
        size="big"
        backgroundColor="grey_00"
        color="grey_100"
        border={false}
        onClick={onClickFollowButton}
      >
        {localUserId === showingId ? (
          <Button3 onClick={() => router.push(`/EditMypage`)}>
            프로필 수정
          </Button3>
        ) : (
          <Button3 onClick={() => ''}>팔로우</Button3>
        )}
      </Button>
    </S.Layout>
  );
}
