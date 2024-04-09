import { OtherProfile } from '@/components/Profile';
import S from './style';
import Button from '@/components/Button';
import { Body3, Body4, Button3 } from '@/components/UI';
import { useRouter } from 'next/router';

export interface UserProfileDataType {
  userId: number;
  userName: string;
  profileImage: string;
  followerCount: number;
  followingCount: number;
  height: number;
  weight: number;
  description: string;
  isMyProfile: Boolean;
  isFollow: Boolean;
  ootdCount: number;
  clothesCount: number;
}

interface profileProps {
  data: UserProfileDataType;
  onClickFollowButton: () => void;
}

export default function Profile({ data, onClickFollowButton }: profileProps) {
  const router = useRouter();

  return (
    <S.Layout>
      <OtherProfile
        showingId={data.userId}
        className="profile"
        userImage={data.profileImage}
        userName={data.userName}
        isUser={true}
        follow={data.followerCount}
        myCloth={data.followingCount}
      />
      {String(data.height) !== '0' && (
        <S.BodyInformation>
          <Body4>{data.height}cm</Body4>
          <Body4 className="dot">•</Body4>
          <Body4>{data.weight}kg</Body4>
        </S.BodyInformation>
      )}
      <S.Introduce>
        <Body3>{data.description}</Body3>
      </S.Introduce>
      {data.isMyProfile ? (
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
