import { Body3, Body4, Caption2 } from '@/components/UI';
import S from './style';
import { MutableRefObject, useEffect, useState } from 'react';
import FollowBlock from '@/components/FollowBlock';
import { useRouter } from 'next/router';
import Spinner from '@/components/Spinner';
import Button from '@/components/Button';
import Avatar from '@/public/images/Avatar.svg';

export type ProfileListType = {
  id: number;
  name: string;
  profileImage: string;
  isFollow: Boolean;
};

interface ProfileProps {
  profileList: ProfileListType[];
  profileIsLoading: Boolean;
  profileRef: MutableRefObject<any>;
  profileHasNextPage: Boolean;
}

export default function Profile({
  profileList,
  profileIsLoading,
  profileRef,
  profileHasNextPage,
}: ProfileProps) {
  const router = useRouter();

  const onClickFollow = () => {
    console.log('클릭');
  };

  return (
    <>
      <S.Layout ref={profileRef}>
        {profileList &&
          profileList.map((item, index) => {
            return (
              <S.ProfileLayout key={index}>
                {item.profileImage === '' ? (
                  <Avatar className="userImage" />
                ) : (
                  <img
                    className="userImage"
                    src={item.profileImage}
                    alt="유저 이미지"
                  />
                )}
                <S.NameText>
                  <Body3 state="emphasis">{item.name}</Body3>
                </S.NameText>

                {item.isFollow ? (
                  <Button
                    border={false}
                    size="small"
                    backgroundColor="grey_95"
                    color="grey_00"
                    className="followButton"
                    onClick={onClickFollow}
                  >
                    <Body3>팔로잉</Body3>
                  </Button>
                ) : (
                  <Button
                    border={false}
                    size="small"
                    backgroundColor="subdued"
                    color="grey_00"
                    className="followButton"
                    onClick={onClickFollow}
                  >
                    <Body3>팔로우</Body3>
                  </Button>
                )}
              </S.ProfileLayout>
            );
          })}
        {profileIsLoading && profileHasNextPage && <Spinner />}
      </S.Layout>
    </>
  );
}
