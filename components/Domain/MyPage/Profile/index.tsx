import { OtherProfile } from '@/components/Profile';
import S from './style';
import Button from '@/components/Button';
import { Body3, Body4, Button3 } from '@/components/UI';
import { useRouter } from 'next/router';

export interface UserProfileDataType {
  userId: number;
  userImage: string;
  userName: string;
  followerCount: number;
  followingCount: number;
  height: number;
  weight: number;
  isFollow: Boolean;
  description: string;
  ootdCount: number;
  clothesCount: number;
}

interface profileProps {
  data: UserProfileDataType;
  localUserId: number;
  showingId: number | undefined;
  onClickFollowButton: () => void;
}

export default function Profile({
  data,
  localUserId,
  showingId,
  onClickFollowButton,
}: profileProps) {
  const router = useRouter();

  return (
    <S.Layout>
      <OtherProfile
        showingId={showingId}
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
      {localUserId === showingId ? (
        <Button
          className="editButton"
          backgroundColor="grey_95"
          color="grey_00"
          size="big"
          onClick={() => router.push(`/edit-mypage`)}
          border={false}
        >
          <Button3>프로필 수정</Button3>
        </Button>
      ) : (
        <S.ButtonWrap state={data.isFollow}>
          {!data.isFollow ? (
            <Button3 onClick={onClickFollowButton}>팔로우</Button3>
          ) : (
            <Button3 onClick={onClickFollowButton}>팔로잉</Button3>
          )}
        </S.ButtonWrap>
      )}
    </S.Layout>
  );
}
